import { Component, OnInit } from '@angular/core';
import TypeIt from 'typeit';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  new TypeIt('#companionMethods', {
  speed: 50,
  cursor: false,
  loop: true,
   waitUntilVisible: true
})
.type('Well, are you already hooked')
.pause(500)
.delete(6)
.type('interested? ')
.pause(1000)
.break()
.type('Email  me: <a href="mailto:gulnar_mammadova@yahoo.com" class="font-weight-bold" style="color: #ffff;">gulnar_mammadova@yahoo.com</a> ')
.pause(1000)
.break()
.pause(750)
.delete()
.type('Not persuaded yet? ')
.pause(750)
.break()
.type('Want to learn more what I do?')
.break()
.pause(750)
.delete()
.type('Then, navigate to  <strong> About section </strong>')
.options({speed: 700})
.type('...')
.pause(750)
.options({speed: 50})
.go();

}
  

}
