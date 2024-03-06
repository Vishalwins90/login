import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableDirective } from './directive/reusable.directive';



@NgModule({
  declarations: [
    ReusableDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
