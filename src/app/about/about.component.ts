import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  keyframes,
  group
} from '@angular/animations';
import TypeIt from 'typeit';
import { MetaTagService } from '../meta-tags.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
       trigger('rocketAnimation', [ 
    	 state('normal', style({
    	
         transform: 'translateY(0)',
    })),
    	  state('fly', style({
    
         transform: 'translateY(-100%)',
    })),
   
    	transition('normal <=> fly', [
    		animate(800, keyframes([  style({
            transform: 'translateY(0)',
           
            offset: 0
          }),
          style({
            transform: 'translateY(-50%)',
       
            offset: 0.5
          }),
          style({
            transform: 'translateY(-100%)',
      
            offset: 1
          })
          ]))
    		])
    	]
    	)

  ]



})
export class AboutComponent implements OnInit {

	state = 'normal';
	onAnimate(evt: MouseEvent) {
    this.state = evt.type === 'mouseenter' ? 'fly' : 'normal';

  }


  constructor(private metaTagService: MetaTagService) { }

  ngOnInit() {

    this.metaTagService.setSocialMediaTags(
      "www.gulnarmammadova.com/about", 
      "About",
      "I develop user-friendly and dynamic Single Page Applications (SPA) using front end JavaScript framework Angular",
      "");

   
    new TypeIt('#breakLines', {
    speed: 20,
    cursor: false,
    waitUntilVisible: true
  }).go();


  }

}
