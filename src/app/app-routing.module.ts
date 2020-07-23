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
     { path: 'work', loadChildren: './projects/projects.module#ProjectsModule' },
      ] },

    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'blog', component: BlogComponent },
    
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
