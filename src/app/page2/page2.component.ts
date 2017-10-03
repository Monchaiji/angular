import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(public router:Router,public location:Location) { }

  goPage3(){
  	this.router.navigate(['/page3/3']);
  }

  forward(){
  	this.location.forward();
  }

  ngOnInit() {
  }

}
