import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';
import { LazyChildComponent } from './lazy-child/lazy-child.component';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LazyHomeComponent
  },
  { 
    path: 'load-me', 
    component: LazyParentComponent 
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyParentComponent, LazyChildComponent, LazyHomeComponent]
})
export class LazyModule { }
