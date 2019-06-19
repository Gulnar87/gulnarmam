import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Certificate } from '../certificate.model';
import { CertificateService } from '../certificate.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';
import { DataStorageService } from '../../../shared/dataStorage.service';

@Component({
  selector: 'app-certificates-list',
  templateUrl: './certificates-list.component.html',
  styleUrls: ['./certificates-list.component.css']
})
export class CertificatesListComponent implements OnInit {

   certificates: Certificate[] =[];
   subscription: Subscription;
   certificate: Certificate;
     


  constructor(private certificateService: CertificateService,   private route: ActivatedRoute, private dsService: DataStorageService) { }


    ngOnInit() {


    this.dsService.getCertificates()
          .subscribe(
              (response: Certificate[]) => {
                  this.certificates = response;
                  this.certificateService.setCertificates(this.certificates);
                  console.log(this.certificate);
              },
              // (error: HttpErrorResponse) => console.log(error)
          );
      
  }


  

}
