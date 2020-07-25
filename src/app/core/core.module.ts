import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CertificateService } from '../about/certificates/certificate.service';
import { ProjectService } from '../projects/project.service';
import { DataStorageService } from '../shared/dataStorage.service';
import { MetaTagService } from '../meta-tags.service';



@NgModule({
	declarations: [
	  HeaderComponent, 
      HomeComponent,
      FooterComponent,
	  ],

	 imports: [
	  CommonModule,
	  AppRoutingModule,
	  NgbModule,
	  FontAwesomeModule
	  
	], 

	exports: [
	 AppRoutingModule,
	 HeaderComponent, 
	 FooterComponent,

	],

	providers: [CertificateService, ProjectService, DataStorageService, MetaTagService],

})

export class CoreModule { }