import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebookF, faGithub, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { faEnvelopeOpen, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

 	faTwitter = faTwitter;
	faFacebookF = faFacebookF;
	faGithub = faGithub;
	faLinkedinIn = faLinkedinIn;
	faInstagram = faInstagram;
	faYoutube = faYoutube;
	faEnvelopeOpen = faEnvelopeOpen;
	faMapMarkerAlt = faMapMarkerAlt;
	faPhone = faPhone;

  constructor() { }

  ngOnInit() {
  }

}
