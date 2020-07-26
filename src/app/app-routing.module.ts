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
      description: 'Portfolio of Gulnar Mammadova, a web developer based in the Hague, the Netherlands.',
      ogTitle: 'Gulnar\'s portfolio',
      ogDescription: 'Portfolio of Gulnar Mammadova, a web developer based in the Hague, the Netherlands.',
      ogImage: 'https://firebasestorage.googleapis.com/v0/b/data-certificates.appspot.com/o/Website%20Pictures%2Fgm-logo.jpg?alt=media&token=0c5aab1f-08d1-4c71-b362-8922db264d0e'
    }

     },
     { path: 'work', loadChildren: './projects/projects.module#ProjectsModule'},

      ]},

    { path: 'about', loadChildren: './about/about.module#AboutModule',
    data: {
      title: 'Gulnar\'s portfolio | About',
      description: 'I develop user-friendly and dynamic Single Page Applications (SPA) using front end JavaScript framework Angular.',
      ogTitle: 'Gulnar\'s portfolio | About',
      ogDescription: 'I develop user-friendly and dynamic Single Page Applications (SPA) using front end JavaScript framework Angular.',
      // ogUrl: '/home'
    }
  },
    { path: 'blog', component: BlogComponent,
    data: {
        title: 'Gulnar\'s portfolio | Blog',
      // description: 'In my free time I do blogging ',
      // ogTitle: 'Gulnar\'s portfolio | Blog',
      // ogDescription: 'In my free time I do blogging ',
      // ogImage: 'ImagePathForSocialMedia'
    }
  
  },
    
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
