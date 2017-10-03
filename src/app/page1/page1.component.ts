import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  lists:any;
  constructor(public _data:DataService) {
    this._data.get_simple1().then(callback=>{
      this.lists = callback;
    });
  }

  ngOnInit() {
  }

  

}
