import { Injectable } from '@angular/core';
import { Customer } from './customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomer() : Customer {
    let customer : Customer = new Customer();
    customer.nameCustomer = "Gabriela";
    customer.cpfCustomer = "74185296325";
    return customer;
  }
}
