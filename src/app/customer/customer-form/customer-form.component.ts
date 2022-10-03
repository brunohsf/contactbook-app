import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

import { Customer } from '../customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customer!: Customer;

  constructor(private service: CustomerService) { 
    this.customer = service.getCustomer();
    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.customer);
  }

}