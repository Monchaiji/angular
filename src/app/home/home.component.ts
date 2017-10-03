import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title_home = "top";
  callback:any;
  constructor() { }

  ngOnInit() {
  }
  
  func_change_callback(title){
  	this.callback = title;
  }

}
