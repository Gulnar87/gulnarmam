import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectItemDetailedComponent } from '../projects/project-item-detailed/project-item-detailed.component';
import { ProjectsResolverService } from '../projects/projects-resolver.service';


const projectRoutes: Routes = [
   {path: ':id', component: ProjectItemDetailedComponent, resolve: [ProjectsResolverService] }
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