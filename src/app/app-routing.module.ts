import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
 { path: '', component: ProjectsComponent, children:[
     { path: '', component: ProjectsListComponent,
     data: {
      title: 'Gulnar\'s portfolio',
        } 
     },
     { path: 'work', loadChildren: './projects/projects.module#ProjectsModule'},

      ]},

    { path: 'about', loadChildren: './about/about.module#AboutModule',
    data: {
      title: 'Gulnar\'s portfolio | About',
    }  
  },
    { path: 'blog', component: BlogComponent,
    data: {
      title: 'Gulnar\'s portfolio | Blog',
    }},
    
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
