import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { CertificatesListComponent } from '../about/certificates/certificates-list/certificates-list.component';



const aboutRoutes: Routes = [
   { path: '', component: AboutComponent},
	{ path: 'certificates', component: CertificatesListComponent,

	  data: {
		title: 'Gulnar\'s portfolio | Certificates',
		description: 'I constanly improve new skills ',
		ogTitle: 'Gulnar\'s portfolio | Certificates',
		ogDescription: 'I constanly improve new skills',
		ogImage: 'ImagePathForSocialMedia'
	  }
	}

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