import { Component, OnInit } from '@angular/core';
import TypeIt from 'typeit';
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

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
       trigger('settingsAnimation', [ 
    	 state('normal', style({
    	
         transform: ' scale(1) ',
    })),
    	  state('fly', style({
    
         transform: ' scale(1)',
    })),
   
    	transition('normal <=> fly', [
    		animate('3000ms ease-out', keyframes([  style({
            transform: ' scale(0)',
           
            offset: 0
          }),
          style({
            transform: 'scale(0.5)',
       
            offset: 0.5
          }),
          style({
            transform: 'scale(1)',
      
            offset: 1
          })
          ]))
    		])
    	]
    	)

  ]
})
export class SkillsComponent implements OnInit {

	state = 'normal';
	onAnimate(evt: MouseEvent) {
    this.state = evt.type === 'mouseenter' ? 'fly' : 'normal';

  }


  constructor() { }

  ngOnInit() {

  new TypeIt('.type-effect', {
  cursor: false,
    waitUntilVisible: true
  }).go();



}


}
