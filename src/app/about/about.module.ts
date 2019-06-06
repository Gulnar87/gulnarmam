import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { CertificatesComponent } from '../about/certificates/certificates.component';
import { CertificatesListComponent } from '../about/certificates/certificates-list/certificates-list.component';
import { CertificateItemComponent } from '../about/certificates/certificate-item/certificate-item.component';
import { ShortBioComponent } from '../about/short-bio/short-bio.component';
import { SkillsComponent } from '../about/skills/skills.component';
import { AboutRoutingModule } from '../about/about-routing.module';


import { SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG } from 'ngx-swiper-wrapper';

import { NgxGalleryModule } from 'ngx-gallery';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};


@NgModule ({
  declarations: [
     AboutComponent,
     CertificatesComponent,
     CertificatesListComponent,
     CertificateItemComponent,
     ShortBioComponent,    
     SkillsComponent
    
  ],
 
     imports: [  
     CommonModule,
     SwiperModule, 
     AboutRoutingModule,
             NgxGalleryModule




  ],


 providers: [{
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
    ],
   
  exports: []
  
})
export class AboutModule { }
