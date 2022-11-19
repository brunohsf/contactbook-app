import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { CustomerModule } from './customer/customer.module'; 
import { CustomerService } from './customer.service';
import { PersonModule } from './person/person.module';
import { PersonService } from './person.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    CustomerModule,
    PersonModule
  ],
  providers: [
    CustomerService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
