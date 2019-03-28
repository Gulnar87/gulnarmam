import { Component, OnInit } from '@angular/core';
import TypeIt from 'typeit';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 isCollapsed = false;

  constructor() { }

  ngOnInit() {

  new TypeIt('.about', {
  cursor: false,
  }).go();


}


  

}
