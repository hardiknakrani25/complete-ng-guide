import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test recipe1', 'test1', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg'),
    new Recipe('Test recipe2', 'test2', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg'),
    new Recipe('Test recipe3', 'test3', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
this.recipeWasSelected.emit(recipe);
  }
}
