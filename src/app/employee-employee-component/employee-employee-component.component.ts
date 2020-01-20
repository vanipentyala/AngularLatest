import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-employee-component',
  templateUrl: './employee-employee-component.component.html',
  styleUrls: ['./employee-employee-component.component.css']
})
export class EmployeeEmployeeComponentComponent implements OnInit {
employeeData=[{name:"ram",subject:"Maths"},{name:"vani",subject:"Computers"}];

  constructor() { }

  ngOnInit() {

  }
 

}
