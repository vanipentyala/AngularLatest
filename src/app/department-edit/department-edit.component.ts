import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {
id:number;
  constructor(private route:Router,private actroute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.actroute.snapshot.params['id'];
    
   // this.actroute.params.subscribe( next:(params:Params)=>
    //  {
      //  this.id=+params.id;
      //}
    //);
  }

}
