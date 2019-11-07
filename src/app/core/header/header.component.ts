import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebookF, faGithub, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { faEnvelopeOpen, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import TypeIt from 'typeit';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faEnvelopeOpen = faEnvelopeOpen;

  faPhone = faPhone;

  navbarOpen = false;


 isCollapsed = false;

  constructor() { }

  ngOnInit() {

  new TypeIt('.about', {
  cursor: false,
  }).go();
}


toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;


}


  

}
