import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params, Router} from '@angular/router';
//activate route is udsed for the get the clicked values

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
user:{id:number,sub:string};
  constructor(private routerone:ActivatedRoute,private router:Router) { }

  ngOnInit() {
   this.user={
      id:this.routerone.snapshot.params['id'],
  sub:this.routerone.snapshot.params['sub']
  
   
  };
  console.log("you selected dept "+this.user.id);
  this.routerone.params.subscribe(
    (params:Params)=>{
      this.user.id=params['id'];
      this.user.sub=params['sub'];

    }
  );
  //query parameter example
  console.log(this.user);
  }
  goBack()
  {
let selectedId=this.user.id?this.user.id:null;
this.router.navigate(['/dept',{id:selectedId}]);
  }
}
