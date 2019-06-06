import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { HttpErrorResponse } from '@angular/common/http';
import { Certificate } from './certificate.model';
import { CertificateService } from './certificate.service';
import { DataStorageService } from '../../shared/dataStorage.service';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

import { ActivatedRoute, Params, Router} from '@angular/router';


import 'hammerjs';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

   certificates: Certificate[] = [];




  constructor(private certificateService: CertificateService,
    private dsService: DataStorageService,  private route: ActivatedRoute) { }

  ngOnInit() {


  

     this.dsService.getCertificates()
            .subscribe(
                (response: Certificate[]) => {
                    this.certificates = response;
              
                    this.certificateService.setCertificates(this.certificates);


           
                    console.log(this.certificates + 'this is response')
            
            
                  
                },
                (error: HttpErrorResponse) => console.log(error)
            );

            console.log(this.certificates)       

  }



 @ViewChild(SwiperComponent) componentRef?: SwiperComponent;
@ViewChild(SwiperDirective) directiveRef?: SwiperDirective;

    public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 4,
     // loop: true,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: true,
    spaceBetween: 15,
    grabCursor: true,
    centeredSlides: false,

     breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 1,
         
        }
      }

  };


  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination', 
    clickable: true,
    hideOnClick: false,

     
  };

    private navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        
      }; 

}
