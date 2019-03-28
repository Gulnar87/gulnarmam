import { Component, OnInit, Input  } from '@angular/core';
import { Project, Root } from '../project.model';




@Component({
  selector: 'app-project-item-short',
  templateUrl: './project-item-short.component.html',
  styleUrls: ['./project-item-short.component.css']
})
export class ProjectItemShortComponent implements OnInit {

   @Input() project: Project;
   @Input() index: number;



  constructor() { }

  ngOnInit() {
   
  

  }

}
