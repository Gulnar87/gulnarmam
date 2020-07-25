import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../projects/project.service';
import { Project, Root, Pictures } from '../project.model';
import { DataStorageService } from '../../shared/dataStorage.service';
import { SEOService } from 'src/app/seo.service';

@Component({
  selector: 'app-project-item-detailed',
  templateUrl: './project-item-detailed.component.html',
  styleUrls: ['./project-item-detailed.component.css'],

})
export class ProjectItemDetailedComponent implements OnInit {
  subscription: Subscription;
	id: number; 
	projects: Project[] ;
  project: Project;
  pictures: Pictures[]

   
	

  constructor(private projectService: ProjectService, 
    private route: ActivatedRoute,
    private router: Router,
    private dsService: DataStorageService, private seoService: SEOService) { }



  ngOnInit() {



        this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.project = this.projectService.getProject(this.id);
        }
      );


      // this.seoService.updateTitle(this.project.name);
      // this.seoService.updateImage(this.project.picHome);
      // //Updating Description tag dynamically with title
      // this.seoService.updateDescription(this.project.description);
  }

}
