import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectItemDetailedComponent } from './projects/project-item-detailed/project-item-detailed.component';
import { ProjectsResolverService } from './projects/projects-resolver.service';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
 { path: '', component: ProjectsComponent, children:[
     { path: '', component: ProjectsListComponent },
     { path: 'work', loadChildren: './projects/projects.module#ProjectsModule'},
      ] },

    { path: 'about', loadChildren: './about/about.module#AboutModule',
    data: {
      title: 'About',
      description:'About me ',
      ogUrl: 'www.gulnarmammadova.com'
    }  },
    { path: 'blog', component: BlogComponent,
    data: {
      title: 'Blog',
      description:'My blog ',
      ogUrl: 'www.gulnarmammadova.com'
    }},
    
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
