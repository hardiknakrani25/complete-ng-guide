import { Recipe } from './recipe.model';
import {EventEmitter} from '@angular/core';
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test recipe1', 'test1', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg'),
    new Recipe('Test recipe2', 'test2', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg'),
    new Recipe('Test recipe3', 'test3', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg')
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
