import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectItemDetailedComponent } from '../projects/project-item-detailed/project-item-detailed.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProjectsRoutingModule } from '../projects/projects-routing.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';


@NgModule({
	declarations: [
    ProjectItemDetailedComponent,
	],

	imports: [
	CommonModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    ProjectsRoutingModule,
    NgxJsonLdModule,

	],

  exports: [

  ]

})

export class ProjectsModule {

}