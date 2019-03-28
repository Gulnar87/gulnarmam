import { Component, OnInit } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faGithub, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { faEnvelopeOpen, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('photosAnimation', [   
 
      transition('* => *', [
        query('img', style({  opacity: 0,  transform: 'translateX(0)', offset: 0})),
        query('img',
          stagger('2000ms', [        
            animate('1500ms ease-out', keyframes([ style({ opacity: 1,  transform: 'translateX(0)', offset: 0.6})  ]) ) 
        ])) 

      ])
    ]),

    trigger('textAnimation', [ 
    	 state('move', style({
    	  opacity: 1,
         transform: 'translateY(0) scale(0)',
    })),
   
    	transition('* => *', [
    		animate('5000ms ease-out', keyframes([  style({
            transform: 'translateY(-100%) scale(0.4)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateY(-50) scale(0.7)',
            opacity: 0.5,
            offset: 0.5
          }),
          style({
            transform: 'translateY(0) scale(1)',
            opacity: 1,
            offset: 1
          })
          ]))
    		])
    	]
    	),
       trigger('textAnimation1', [ 
    	 state('move2', style({
    	  opacity: 1,
          transform: 'translateY(0) scale(0)',
    })),
   
    	transition('* => *', [
    		animate('5000ms ease-out', keyframes([  style({
            transform: 'translateY(100%) scale(0.4)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateY(50%) scale(0.7)',
            opacity: 0.5,
            offset: 0.5
          }),
          style({
            transform: 'translateX(0) scale(1)',
            opacity: 1,
            offset: 1
          })
          ]))

    		]),
    	]
    	)
  ]


})

export class HomeComponent implements OnInit {

  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faEnvelopeOpen = faEnvelopeOpen;

  faPhone = faPhone;
  constructor() { }

  ngOnInit() {




  }

	faArrowDown = faArrowDown;

	photos = [
	{ img: "assets/gul1.JPG"
		
	},

	{
	img: "assets/gul2.JPG"

	},

	{
	 img: "assets/gul3.JPG"

	}
]



}
