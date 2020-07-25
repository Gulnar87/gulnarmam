import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
 { path: '', component: ProjectsComponent, children:[
     { path: '', component: ProjectsListComponent,
     data: {
      ogUrl: 'www.gulnarmammadova.com',
      title: 'Gulnar\'s portfolio',
      description:'Portfolio of Gulnar Mammadova, a web developer based in the Hague, the Netherlands.'  
          } 
     },
     { path: 'work', loadChildren: './projects/projects.module#ProjectsModule',
     data: {
      ogUrl: 'www.gulnarmammadova.com',
      title: 'Gulnar\'s portfolio',
      description:'Portfolio of Gulnar Mammadova, a web developer based in the Hague, the Netherlands.'
    }},

      ]},

    { path: 'about', loadChildren: './about/about.module#AboutModule',
    data: {
      ogUrl: 'www.gulnarmammadova.com/about',
      title: 'About',
      description:'I develop user-friendly and dynamic Single Page Applications (SPA) using front end JavaScript framework Angular'
    }  },
    { path: 'blog', component: BlogComponent,
    data: {
      ogUrl: 'www.gulnarmammadova.com/blog',
      title: 'Blog',
      description:'In my free time I like writing, making youtube videos etc.',
    }},
    
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
