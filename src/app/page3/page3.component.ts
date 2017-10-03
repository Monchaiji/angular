import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})

export class Page3Component implements OnInit {
  id:any;
  query_string:any;
  constructor(public activeRoute:ActivatedRoute,public location:Location){
  	this.activeRoute.params.subscribe((param)=>{
  		this.id = param['id'];
    });
    
    this.query_string = this.activeRoute.snapshot.queryParams['param'];
  }
  
  back(){
  	this.location.back();
  }
  ngOnInit() {

  }

}
