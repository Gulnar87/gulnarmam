import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-jsonld',
  // templateUrl: './jsonld.component.html',
  template: '<div [innerHTML]="jsonLD"></div>',
  // styleUrls: ['./jsonld.component.css']
})
export class JsonLdComponent implements OnInit {
 jsonLD:SafeHtml;
 @Input() json: {};

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // const json = {
    //   '@context': 'http://schema.org',
    //   '@type': 'Organization',
    //   url: 'https://google.com',
    //   name: 'Google',
    //   contactPoint: {
    //     '@type': 'ContactPoint',
    //     telephone: '+1-000-000-0000',
    //     contactType: 'Customer service'
    //   }

    // };

    this.jsonLD = this.getSafeHTML(this.json);
  }

  getSafeHTML(value: {}) {
    // If value convert to JSON and escape / to prevent script tag in JSON
    const json = value
      ? JSON.stringify(value, null, 2).replace(/\//g, '\\/')
      : '';
    const html = `${json}`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
