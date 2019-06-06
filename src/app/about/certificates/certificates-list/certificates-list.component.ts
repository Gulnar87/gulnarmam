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

   
 
    //   this.subscription = this.certificateService.certificatesChanged
    // .subscribe(
    //     (certificates: Certificate[]) => {
    //       this.certificates = certificates;
            
    //           console.log(this.certificates)  
   
          
    //     }
    //   );
      
    //   this.certificates = this.certificateService.getCertificates();
    //       console.log(this.certificates)  

        const project_id = this.route.snapshot.paramMap.get('id');

    this.dsService.getCertificates()
          .subscribe(
              (response: Certificate[]) => {
                  this.certificates = response;
                  // this.certificate = this.certificates.find(p => p.id.toString() === project_id.toString());
                  console.log(this.certificates, project_id);
                  console.log(this.certificate);
              },
              // (error: HttpErrorResponse) => console.log(error)
          );
      
  }

    ngOnDestroy(){
    // this.subscription.unsubscribe();
  }

  

}
