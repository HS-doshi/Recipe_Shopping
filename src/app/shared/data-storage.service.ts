import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipes.service';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http : HttpClient,
    private recipeService : RecipeService) { }

  storeRecipe(){
    const recipes= this.recipeService.getRecipes();
     this.http.put('https://recipe---book-55997-default-rtdb.firebaseio.com/recipes.json',
    recipes)
    .subscribe(response=>{
      console.log(response)
    })
  }

  FetchRecipes() {
    return this.http.get<Recipe[]>('https://recipe---book-55997-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingrediants ? recipe.ingrediants : [] // Corrected typo in 'ingredients'
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
