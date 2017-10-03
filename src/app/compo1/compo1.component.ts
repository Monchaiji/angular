import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {
  @Input() title:any;
  @Output() sayhi = new EventEmitter();
  
  description = "compo1 works!";
  constructor() { }

  ngOnInit() {
  }

  func_hi($event){
  	console.log($event);
  	this.sayhi.next("Yo!");
  }

}
