import { Component, OnInit ,Input, SimpleChange,DoCheck,
   ViewChild,
   ElementRef,
   AfterViewInit,
   ContentChild,
   AfterContentInit,
   EventEmitter,
   Output} from '@angular/core';

import { addressChange } from '../address.service';
import { nameChange } from '../namechange.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[addressChange,nameChange]
})
export class AdminComponent implements OnInit,
AfterViewInit,AfterContentInit {
 
@Input() adminname=[{}];
@Input() nameone;
@Input() admincontent;
@Output() incrementData=new EventEmitter<number>();
@Output() decrementData=new EventEmitter<number>();
@ViewChild('inputvalue',{static:true}) childdata:ElementRef;
data=0;
nametwo:string='testing';

@ViewChild('refsample',{static:true}) header:ElementRef;
@ContentChild('contentparagraph',{static:true}) fromchild:ElementRef;

  constructor(private addresscha:addressChange) { 
    console.log("constructor called");
    
  }
  ngOnChanges(changes:SimpleChange){
console.log(changes);

  }

  ngOnInit() {
  this.addresscha.TestMethod();
    console.log("ngOnit called only once")
    console.log("view data ngonit"+this.header.nativeElement.value);
  }
  ngDoCheck(){
    console.log("ngdocheck method called");
  }
  ngAfterViewInit()
  {
    console.log("this is ng viewcontent")
    console.log(this.header);
    console.log("after intializing"+this.header.nativeElement.value);
    console.log("child data"+this.childdata.nativeElement.value);
  }
  ngAfterContentInit()
  {
    console.log("****------"+this.fromchild.nativeElement.innerText);
    console.log("child data"+this.childdata.nativeElement.value);
  }

  //ngAfterContentInit()
  //ngAfterContentChecked()
  //ngAfterViewInit()
  //ngAfterViewChecked()
//ngDestroy()
AddItem()
{
  console.log(this.childdata.nativeElement.value);
  this.data=this.data+1;
  this.incrementData.emit(this.data);

}
DeleteItem()
{
  this.data=this.data-1;
  this.decrementData.emit(this.data);
}

}