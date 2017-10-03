import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { Dialog1Component } from '../dialog1/dialog1.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title_home = "top";
  callback:any;
  constructor(public dialog: MdDialog,) { }

  ngOnInit() {
  }
  
  func_change_callback(title){
  	this.callback = title;
  }
  open_dialog(){
    let dialogRef = this.dialog.open(Dialog1Component, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
