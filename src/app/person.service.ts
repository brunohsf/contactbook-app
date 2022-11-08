import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  save(person: Person) : Observable<Person> {
    return this.http.post<Person>('http://localhost:8080/api/person/save', person);
  }

  findAll() : Observable<Person[]> {
    return this.http.get<Person[]>('http://localhost:8080/api/person/list');
  }

  findById(id: number) : Observable<Person> {
     return this.http.get<any>(`http://localhost:8080/api/person/${id}`);
  }

  update(person: Person) : Observable<Person> {
    return this.http.put<Person>(`http://localhost:8080/api/person/${person.idPerson}`, 
      person);
  }

  delete(person: Person) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/person/${person.idPerson}`);
  }

}
