
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Certificate } from '../certificates/certificate.model';
import { Observable } from 'rxjs';
import { switchMap, take, tap} from 'rxjs/operators';

@Injectable()
export class CertificateService {
   certificatesChanged = new Subject<Certificate[]>();
   
	private	certificates : Certificate[] = [];

	constructor() {}


  getCertificates(){
  	return this.certificates.slice();
  }

  getcertificate(index: number){
    return this.certificates[index];
  }

  setCertificates(certificates: Certificate[]){
    this.certificates = certificates;
    this.certificatesChanged.next(this.certificates.slice());

  }
  

}