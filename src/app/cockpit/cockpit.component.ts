import { Component, OnInit, Output, Input ,EventEmitter, ViewChild, ElementRef, OnChanges} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  
test:string="vani pentyala";
@Input() public parentDataname;
email:string='';
@ViewChild('serverviewchild',{static: true}) serverviewchild :ElementRef;

@Output() public childevent =new EventEmitter();
  constructor() {
    console.log("firsttime caaled");
    console.log("inside constructor");
    console.log("***********************");
   }

  

  ngOnInit() {
    console.log("nside ngonit");
  }
  sendData()
  {
    this.childevent.emit(this.test);
    console.log(this.test);
  }
  //template rfernce variable
  templateData(saveTemplate:HTMLInputElement)
  {
console.log(saveTemplate.value)
  }
  datafromtext(event:any)
  {
    //print the viewchild data
    console.log("thisis viewchild data"+this.serverviewchild.nativeElement.value);
console.log(event.target.value);
  }
}
