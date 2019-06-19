import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

import { Certificate } from '../certificate.model';
import { CertificateService } from '../certificate.service';

import { Subscription } from 'rxjs';

import { DataStorageService } from '../../../shared/dataStorage.service';



@Component({
  selector: 'app-certificates-swiper',
  templateUrl: './certificates-swiper.component.html',
  styleUrls: ['./certificates-swiper.component.css']
})
export class CertificatesSwiperComponent implements OnInit {

   certificates: Certificate[] = [];
   subscription: Subscription;
   certificate: Certificate;

  constructor(private certificateService: CertificateService, private dsService: DataStorageService) { }

  ngOnInit() {

  	 this.dsService.getCertificates()
            .subscribe(
                (response: Certificate[]) => {
                    this.certificates = response;
              
                    this.certificateService.setCertificates(this.certificates);
           
                    console.log(this.certificates + 'this is response')
                  
                },
                // (error: HttpErrorResponse) => console.log(error)
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
