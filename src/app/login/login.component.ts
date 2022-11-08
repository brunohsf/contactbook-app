import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  name!: string;
  email!: string;
  password!: string;
  loginError!: boolean;
  submiting!: boolean;

  constructor(private router: Router) { }

  onSubmit() {
    this.router.navigate(['/home']);
  }

  prepareSubmiting(event: any) {
    event?.preventDefault();
    this.submiting = true;
  }


}
