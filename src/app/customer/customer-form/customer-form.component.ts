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

  constructor( private service: CustomerService ) { 
    this.customer = new Customer();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.customer)
      .subscribe(response => {
        console.log(response);
      })
  }

}