import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerFormComponent } from './customer-form/customer-form.component';



@NgModule({
  declarations: [
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ], exports: [
    CustomerFormComponent
  ]
})
export class CustomerModule { }