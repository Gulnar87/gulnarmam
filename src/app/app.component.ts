import { Component, Pipe, PipeTransform,  OnInit } from '@angular/core';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SEOService } from './seo.service';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})


export class AppComponent implements OnInit {

  constructor(private router: Router,  
    private activatedRoute: ActivatedRoute,
    private seoService: SEOService) {
    const navEndEvents = router.events.pipe(
      filter(
        event => event instanceof NavigationEnd
      )
    );

    navEndEvents.subscribe(
      (event: NavigationEnd) => {
        gtag('config', 'UA-143183239-1', {
          page_path: event.urlAfterRedirects,
        });
      }
    );
  }


  ngOnInit() {
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
