import { Component, OnInit, Input } from '@angular/core';
import { Certificate } from '../certificate.model';

@Component({
  selector: 'app-certificate-item',
  templateUrl: './certificate-item.component.html',
  styleUrls: ['./certificate-item.component.css']
})
export class CertificateItemComponent implements OnInit {


    @Input() certificate: Certificate;

  constructor() { }



  ngOnInit() {
  }

}
