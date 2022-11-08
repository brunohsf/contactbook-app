import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private http: HttpClient) {
    
   }

   save(customer: Customer) : Observable<Customer> {
    return this.http.post<Customer>('http://localhost:8080/api/customer/save', customer);
   }

  getCustomer() : Customer {
    let customer : Customer = new Customer();
    customer.nameCustomer = "Tiago";
    customer.cpfCustomer = "434";
    return customer;
  }
}
