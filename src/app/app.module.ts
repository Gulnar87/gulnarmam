import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent} from './app.component';
import { CoreModule } from './core/core.module';
// import { ProjectsModule } from './projects/projects.module';
import { AboutModule } from './about/about.module'; 

import { ContactComponent } from './contact/contact.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
 
  ],

  imports: [
    BrowserModule.withServerTransition({appId: 'gulnarmam'}),
    AppRoutingModule,  
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    // ProjectsModule,
    AboutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),



  ],
  providers: [ ],
  bootstrap: [AppComponent]
})

export class AppModule { }
