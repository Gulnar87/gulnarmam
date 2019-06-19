import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Certificate } from './certificate.model';
import { CertificateService } from './certificate.service';
import { DataStorageService } from '../../shared/dataStorage.service';


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

     // this.dsService.getCertificates()
     //        .subscribe(
     //            (response: Certificate[]) => {
     //                this.certificates = response;
              
     //                this.certificateService.setCertificates(this.certificates);
           
     //                console.log(this.certificates + 'this is response')
                  
     //            },
     //            (error: HttpErrorResponse) => console.log(error)
     //        );

     //        console.log(this.certificates)       

  }



 

}
