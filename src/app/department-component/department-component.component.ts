import { Component, OnInit } from '@angular/core';
import{Router, Routes, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-department-component',
  templateUrl: './department-component.component.html',
  styleUrls: ['./department-component.component.css']
})
export class DepartmentComponentComponent implements OnInit {
departmentslist=[{"id":1,"name":"Angular"},{"id":2,"name":"Node"},
{"id":3,"name":"JavaScript"},{"id":4,"name":"BootStrap"}];
latestId:number;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
    this.latestId=params['id'];
    console.log("*********"+this.latestId);
      }
    );
  }
  onSelect(data)
  {
this.router.navigate(['/dept',data.id])
  }
  onEmployee()
  {
    console.log("hello");
    this.router.navigate(['employee'],{relativeTo:this.route});

  }
  isSelected(departmentslist)
  {
   return departmentslist.id===this.latestId;
  }
}
