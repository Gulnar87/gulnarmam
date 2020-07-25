import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectItemDetailedComponent } from './projects/project-item-detailed/project-item-detailed.component';
import { ProjectsResolverService } from './projects/projects-resolver.service';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
 { path: '', component: ProjectsComponent, children:[
     { path: '', component: ProjectsListComponent,
     data: {
      title: 'Gulnar\'s portfolio',
      description:'Portfolio of Gulnar Mammadova, a web developer based in the Hague, the Netherlands.',
      ogUrl: 'www.gulnarmammadova.com'
          } 
     },
     { path: 'work', loadChildren: './projects/projects.module#ProjectsModule',
     data: {
      title: 'Gulnar\'s portfolio',
      description:'Portfolio of Gulnar Mammadova, a web developer based in the Hague, the Netherlands.',
      ogUrl: 'www.gulnarmammadova.com'
    }},

      ]},

    { path: 'about', loadChildren: './about/about.module#AboutModule',
    data: {
      title: 'About',
      description:'I develop user-friendly and dynamic Single Page Applications (SPA) using front end JavaScript framework Angular',
      ogUrl: 'www.gulnarmammadova.com/about'
    }  },
    { path: 'blog', component: BlogComponent,
    data: {
      title: 'Blog',
      description:'In my free time I like writing, making youtube videos etc.',
      ogUrl: 'www.gulnarmammadova.com/blog'
    }},
    
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
