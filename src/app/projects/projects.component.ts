import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { DataStorageService } from '../shared/dataStorage.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SEOService } from '../seo.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(private dsService: DataStorageService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private seoService: SEOService) { }

  ngOnInit() {
    this.dsService.getProjects().subscribe();


      this.router.events.pipe(
         filter((event) => event instanceof NavigationEnd),
         map(() => this.activatedRoute),
         map((route) => {
           while (route.firstChild) route = route.firstChild;
           return route;
         }),
         filter((route) => route.outlet === 'primary'),
         mergeMap((route) => route.data)
        )
        .subscribe((event) => {
          this.seoService.updateTitle(event['title']);
          this.seoService.updateOgUrl(event['ogUrl']);
          //Updating Description tag dynamically with title
          this.seoService.updateDescription(event['title'] + event['description'])
        }); 
    

  }
}
