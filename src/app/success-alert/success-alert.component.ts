import { Component, OnInit } from '@angular/core';
import { addressChange } from '../address.service';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  userName:string='';
  isBold:boolean=false;
  
  classestoApply:string='itacicClass boldClass';
  callpassword:boolean=true;
  selectclicks=[];
  backgroundColor1:string='';
 

  constructor(private addressCha:addressChange) {

   }

  ngOnInit() {
   
  }
  getUserName()
  {
this.userName='';
   
  }
  ToggleMethod()
  {
    this.callpassword=!this.callpassword;
    this.selectclicks.push(this.selectclicks.length+1);
    if(this.selectclicks.length==5||this.selectclicks.length>5)
    {
      this.backgroundColor1='blue';
    }

  }

 
}
