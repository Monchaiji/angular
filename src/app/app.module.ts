import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { MatButtonModule,MatDialogModule,MatGridListModule } from '@angular/material';

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Compo1Component } from './compo1/compo1.component';
import { HttpClientModule } from '@angular/common/http';
import { Dialog1Component } from './dialog1/dialog1.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: 'page2',
    component: Page2Component
  },
  {
    path: 'page3/:id',
    component: Page3Component
  },
  {
    path: 'lazy', 
    loadChildren: './lazy.module#LazyModule'
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    NotfoundComponent,
    Compo1Component,
    Dialog1Component,
  ],
  entryComponents:[
    Dialog1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
