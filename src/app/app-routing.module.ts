import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ContactComponent } from './contact/contact.component';


import { ProjectsComponent } from './projects/projects.component';
import { CertificatesListComponent } from './about/certificates/certificates-list/certificates-list.component';
import { ProjectItemDetailedComponent } from './projects/project-item-detailed/project-item-detailed.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';

import { AboutComponent } from './about/about.component';


const routes: Routes = [

  { path: '', redirectTo: '/work', pathMatch: 'full'},
    { path: 'work', loadChildren: './projects/projects.module#ProjectsModule' },
    



 
  //   { path: 'about', component: AboutComponent },
  //   { path: 'certificates', component: CertificatesListComponent },

  //   { path: '', component: ProjectsComponent, children:[
  //  { path: '', component: ProjectsListComponent},
  //  {path: ':id', component: ProjectItemDetailedComponent},


  // ] },


   

];



@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
