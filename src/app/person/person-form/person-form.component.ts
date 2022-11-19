import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonService } from 'src/app/person.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  person!: Person;
  success: boolean = false;
  errors!: String[];
  idPerson!: number;

  constructor( 
    private service: PersonService, 
    private router: Router,
    private activatedRoute: ActivatedRoute ) {
      this.person = new Person();
   }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.idPerson = urlParams['id'];
      if (this.idPerson) {
        this.service.findById(this.idPerson).subscribe(
          response => this.person = response,
          errorResponse => this.person = new Person()
        );
      }
    });    
  }

  onSubmit() {
    if (this.idPerson) {
      this.service.update(this.person)
        .subscribe(response => {
          this.success = true;
          this.errors = [];
        }, errorResponse => {
          this.errors = errorResponse.error.errors;
        });
    } else {
      this.service.save(this.person)
      .subscribe(response => {        
        this.success = true;
        this.errors = [];
        this.person = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;        
      })
    }   
    
  }

  callPersonList() {
    this.router.navigate(['/person/list']);
  }
 
}