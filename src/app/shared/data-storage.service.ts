import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import { map } from 'rxjs/operator/map';
import 'rxjs/Rx';



@Injectable()
export class DataStorageService {
constructor(private http: Http, private recipeservice: RecipeService) {}
storeRecipes() {
  return this.http.put('https://angular-recipe-book-52db9.firebaseio.com/recipes.json', this.recipeservice.getRecipes());
}

getRecipes() {
  this.http.get('https://angular-recipe-book-52db9.firebaseio.com/recipes.json').map( (response: Response) => {
    const recipes: Recipe[] = response.json();
    for (const recipe of recipes) {
      if (!recipe['ingredients']) {
        console.log(recipe);
        recipe['ingredients'] = [];
      }
    }
    return recipes;
  }).subscribe(
    (recipes: Recipe[]) => {
      this.recipeservice.setRecipes(recipes);

    }
  );

}

}
