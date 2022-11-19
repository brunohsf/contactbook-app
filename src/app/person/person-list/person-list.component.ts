import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/person.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[] = [];
  person!: Person;
  selectedPerson!: Person;
  messageSuccess!: string;
  messageError!: string;

  constructor( 
    private service: PersonService, 
    private router: Router) { 
      
    }

  ngOnInit(): void {
    this.selectedPerson = new Person();
    this.service.findAll()
      .subscribe(response => {
        this.persons = response        
      })
  }

  callPersonForm() {
    this.router.navigate(['/person/form']);
  }
  
  prepareDelete(person: Person) {
    this.selectedPerson = person;
  }

  delete() {
    this.service.delete(this.selectedPerson)
      .subscribe(
        response => {
          this.messageSuccess = 'Usuário excluído com sucesso!'
          this.ngOnInit();
        },
        error => this.messageError = 'Problemas ao excluir usuário!'
      )
  }

}