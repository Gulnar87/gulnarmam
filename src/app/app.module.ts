import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// import {FacebookModule} from 'ngx-facebook';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent} from './app.component';
import { CoreModule } from './core/core.module';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectItemShortComponent } from './projects/project-item-short/project-item-short.component';
import { MessageComponent } from './message/message.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectItemShortComponent,
    MessageComponent,
    ProjectsComponent,
    BlogComponent,
 
  ],

  imports: [
    BrowserModule.withServerTransition({appId: 'gulnarmam'}),
    AppRoutingModule,  
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    NgxJsonLdModule
    // FacebookModule.forRoot(),
  
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})

export class AppModule { }
