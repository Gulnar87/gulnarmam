import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Certificate } from '../certificate.model';
import { CertificateService } from '../certificate.service';


import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-certificates-list',
  templateUrl: './certificates-list.component.html',
  styleUrls: ['./certificates-list.component.css']
})
export class CertificatesListComponent implements OnInit {

   certificates: Certificate[];
   subscription: Subscription;


  constructor(private certificateService: CertificateService) { }


    ngOnInit() {
      this.subscription = this.certificateService.certificatesChanged
    .subscribe(
        (certificates: Certificate[]) => {
          this.certificates = certificates;
          
        }
      );
      
      this.certificates = this.certificateService.getCertificates();
      
  }

    ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  

}
