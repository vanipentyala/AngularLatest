import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EmployeeEmployeeComponentComponent } from './employee-employee-component/employee-employee-component.component';
import { DepartmentComponentComponent } from './department-component/department-component.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientComponent } from './patient/patient.component';
import { PatientFeedetailsComponent } from './patient-feedetails/patient-feedetails.component';
const appRoutes:Routes=[
    {path:'',redirectTo:'/employee',pathMatch:'full'},
    {path:'employee',component:EmployeeEmployeeComponentComponent},
    {path:'dept',component:DepartmentComponentComponent,children:[]},
    {path:'dept/:id',component:DepartmentDetailComponent},
    {path:'dept/:id/edit',component:DepartmentEditComponent},
    {path:'dept/:id/:sub',component:DepartmentDetailComponent},
    {path:'patient',component:PatientComponent,
    children:
    [
        {path:':id',component:PatientFeedetailsComponent}
    ]
   },
{path:'**',component:PageNotFoundComponent}
   ];
 @NgModule(
    {
imports:[
RouterModule.forRoot(appRoutes)
 ],
 exports:[RouterModule]
    }
)
export class AppRoutingModule
{
    
}