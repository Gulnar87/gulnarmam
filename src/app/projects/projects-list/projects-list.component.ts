import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../projects/project.service';
import { Project } from '../project.model';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faGithub, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';

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
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
  animations: [
    trigger('photosAnimation', [   
 
      transition('* => *', [
        query('img', style({  opacity: 0,  transform: 'translateX(0)'})),
        query('img',
          stagger('2000ms', [        
            animate('1500ms ease-out', keyframes([ style({ opacity: 1,  transform: 'translateX(0)'})  ]) ) 
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

export class ProjectsListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  projects: Project[];
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faEnvelopeOpen = faEnvelopeOpen;

  faPhone = faPhone;

   faArrowDown = faArrowDown;

  photos = [
  { img: "assets/gulnar-1.jpg"
    
  },

  {
  img: "assets/gulnar-2.jpg"

  },

  {
   img: "assets/gulnar-3.jpg"

  }
]

  constructor(private pS: ProjectService) { }

  ngOnInit() {
 this.subscription = this.pS.projectsChanged
  	.subscribe(
        (projects: Project[]) => {
          this.projects = projects;
          
        }
      );
      
      this.projects = this.pS.getProjects();      
  }

    ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
