import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { nameChange } from 'src/app/namechange.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers:[nameChange]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeimage=new EventEmitter<string>()
recipes: RecipeModel[]=[new RecipeModel("Chole curry","High Protein food",
"http://www.tasty-indian-recipes.com/wp-content/uploads/2014/08/Chole-Puri.jpg"),
new RecipeModel("Chole curry","High Protein food2",
"http://www.tasty-indian-recipes.com/wp-content/uploads/2014/08/Chole-Puri.jpg")];
  constructor(private namechange:nameChange) {

   }

  ngOnInit() {
    this.namechange.getName("vani pentyala");
  }
  RecipeDetail(recipedetail:RecipeModel)
  {
    this.recipeimage.emit(recipedetail.imagepath);
  }
}
