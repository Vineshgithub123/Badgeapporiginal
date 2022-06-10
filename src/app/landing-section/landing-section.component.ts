// import { animate } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
// import { trigger } from '@angular/animations';
// import { transition,style } from '@angular/animations';
import * as AOS from 'aos'

@Component({
  selector: 'app-landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.css'],


})
export class LandingSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      offset:120,
      duration:3000
    });
  }
 
myimage:string="/assets/emile-perron-xrVDYZRGdw4-unsplash.jpg"

}
