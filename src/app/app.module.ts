import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { appBasicHighlightDirective } from './basic-highlight/basic.highlight.directive';
import { appBetterDirective } from './basic-highlight/better.highlight.directive';
import { EmployeeEmployeeComponentComponent } from './employee-employee-component/employee-employee-component.component';
import { DepartmentComponentComponent } from './department-component/department-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { PatientComponent } from './patient/patient.component';
import { PatientFeedetailsComponent } from './patient-feedetails/patient-feedetails.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    LoginComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    appBasicHighlightDirective,
    appBetterDirective,
    EmployeeEmployeeComponentComponent,
    DepartmentComponentComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartmentEditComponent,
    PatientComponent,
    PatientFeedetailsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
