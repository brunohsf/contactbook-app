import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';

const routes: Routes = [
  { path: 'person', component: LayoutComponent, children: [
    { path: 'form', component: PersonFormComponent },
    { path: 'form/:id', component: PersonFormComponent },
    { path: 'list', component: PersonListComponent },
    { path: '', redirectTo: '/person/list', pathMatch: 'full'}
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
