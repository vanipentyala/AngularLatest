import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() dataemitier=new EventEmitter<string>();
@Input() admincontent;
  constructor() { }

  ngOnInit() {
  }
  onSelect(data:string)
  {
this.dataemitier.emit(data);
  }
}
