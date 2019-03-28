import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { CertificatesListComponent } from '../about/certificates/certificates-list/certificates-list.component';
import { ProjectItemDetailedComponent } from '../projects/project-item-detailed/project-item-detailed.component';
import { ProjectsListComponent } from '../projects/projects-list/projects-list.component';



const projectRoutes: Routes = [
 
  { path: 'work', component: ProjectsComponent, children:[
   { path: '', component: ProjectsListComponent},
   {path: ':id', component: ProjectItemDetailedComponent},
  ] },

];


@NgModule({
	imports: [
	  RouterModule.forChild(projectRoutes)
	],
	exports: [
	  RouterModule,

	],


})
export class ProjectsRoutingModule {

}