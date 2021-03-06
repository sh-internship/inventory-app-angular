import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';



const profileRoutes: Routes = [
    {
        path: '',
        component: EmployeesComponent,
      children: [
        {
          path: 'list',
          component: EmployeesListComponent
        }, {
          path: 'list/:id',
          component: EmployeeDetailsComponent
        }, {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        }],
    }];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(profileRoutes)],
    exports: [RouterModule]
})
export class EmployeesRouting { }
