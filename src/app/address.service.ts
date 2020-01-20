import { Injectable, OnInit } from "@angular/core";
import { nameChange } from './namechange.service';

@Injectable()
export class addressChange implements OnInit{
valuespassing=[{name:"ggg",amount:10},{name:"hari",amount:20}];
arrayValue=[{name:"ggg",amount:10},{name:"hari",amount:20}];

    constructor(private namech:nameChange)
    {

    }
ngOnInit()
{

}
TestMethod()
{
this.namech.getName(this.valuespassing);
this.namech.getObjectData(this.arrayValue);
}
}