import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  datafromheader='recipe';
  admincon="passingdata through components";
  @ViewChild('contentparagraph',{static:true}) contenttest:ElementRef;
 
  oddNumbers=[1,3,5];
  evenNumbers=[2,4];
  toggleelement=true;

  
  constructor(private router:Router)
  {
  
  }
 
  ngOnInit(): void {
   console.log("ngonit method");
  // console.log("***********"+this.contenttest.nativeElement.value);
  }
  ngAfterViewInit(): void {
    console.log("ngafterviewinit");
   // console.log("------------"+this.contenttest.nativeElement.innerText);
  }
  title = 'my-first-app';
  shopname:string;
  shopnumber:number;
 name=[{name:"vani",age:33},{name:"hari",age:36}];
testdata:string="viewchilddata";

  shoplist(eventdata:{name:string,amount:number})
  {
    name:this.shopname;
    amount:this.shopnumber;
  }
  messagefromheader(headerdata:string)
  {
this.datafromheader=headerdata;
  }
  AddIncrement(data:number)
  {
    
    console.log("incremented value coming from admin"+data);
  }
  AddDecrement(datadec:number)
  {
  
console.log("decremented value from admin"+datadec);
  }
  onlyOdd()
  {
   this.toggleelement=!this.toggleelement;
  }
  employeePage()
  {
this.router.navigate(['/dept'])
  }

}
