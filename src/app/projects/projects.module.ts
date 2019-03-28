import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectItemShortComponent } from '../projects/project-item-short/project-item-short.component';
import { ProjectItemDetailedComponent } from '../projects/project-item-detailed/project-item-detailed.component';
import { ProjectsListComponent } from '../projects/projects-list/projects-list.component';
import { MessageComponent } from '../message/message.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SafePipe } from '../app.component';
import { ProjectsRoutingModule } from '../projects/projects-routing.module';



@NgModule({
	declarations: [
    ProjectsComponent,
    ProjectItemShortComponent,
    ProjectItemDetailedComponent,
    ProjectsListComponent,
    MessageComponent,
    SafePipe

	],

	imports: [
	CommonModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    ProjectsRoutingModule

	],

  exports: [

  ]

})

export class ProjectsModule {

}