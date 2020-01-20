import { Injectable } from "@angular/core";

@Injectable()
export class nameChange
{
    getObjectData(arrayValue: { name: string; amount: number; }[]) {
       console.log("this is for test"+arrayValue[0].name);
    }

getName(datachange:any)
{
    
    console.log("hello data has to change"+datachange[1].amount);
}
}