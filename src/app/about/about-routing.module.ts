import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { CertificatesListComponent } from '../about/certificates/certificates-list/certificates-list.component';




const aboutRoutes: Routes = [
   { path: 'about', component: AboutComponent },
   { path: 'certificates', component: CertificatesListComponent }

];


@NgModule({
	imports: [
	  RouterModule.forChild(aboutRoutes)
	],
	exports: [
	  RouterModule,

	],


})
export class AboutRoutingModule {

}