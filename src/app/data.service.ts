import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(public http:HttpClient) { }

  get_simple1(){
    return new Promise((resolve,reject)=>{
      this.http.get('assets/data/sample1.json').subscribe(data=>{
        resolve(data);
      });
    });
  }
}
