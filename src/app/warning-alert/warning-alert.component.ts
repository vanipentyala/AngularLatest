import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  warningmes:boolean=true;
  eventinputdata='Vani';
  eventsample:string='';
  acountNumber="123456";

  constructor() { }

  ngOnInit() {
  }
  warningMessage()
  {
   console.log("event clicked");
  }
  SaveUserData()
  {
    console.log("save in to db"+this.eventinputdata);
    console.log("save account number into Db"+this.acountNumber);
  }
  getUpdateData(event:Event)
  {
    this.eventsample=(<HTMLInputElement>event.target).value;
    console.log(this.eventsample);


  }

}
