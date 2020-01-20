import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[]=[new Ingredient("Apples",3),new Ingredient("Orange",2)];
newname:string='';
newamount:number;  
constructor() { }

  ngOnInit() {
  }
  @Output() public childeventshop =new EventEmitter<{name:string,amount:number}>();

shopData()
{
  this.childeventshop.emit({name:this.newname,amount:this.newamount});
  console.log(this.ingredients);
}

}
