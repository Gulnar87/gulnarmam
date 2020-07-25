import { Component, Pipe, PipeTransform,  OnInit } from '@angular/core';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MetaTagService } from './meta-tags.service';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})


export class AppComponent implements OnInit {

  constructor(private router: Router,  
    private activatedRoute: ActivatedRoute,
    private metaTagService: MetaTagService) {
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
        this.metaTagService.setTitle(event['title']);
        // this.metaTagService.setSocialMediaTags(
        //    event['ogUrl'], 
        //    event['title'],
        //    event['description'],
        //    "https://firebasestorage.googleapis.com/v0/b/data-certificates.appspot.com/o/Website%20Pictures%2Fgm-logo.jpg?alt=media&token=0c5aab1f-08d1-4c71-b362-8922db264d0e,"
  
        //   );

      }); 
    }

}
