import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Observable } from 'rxjs';
import { ResolveFn } from '@angular/router';
import { RecipeService } from './recipes.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {

  constructor(private dataStorage: DataStorageService,
    private recipeService  : RecipeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();

    if(recipes.length === 0 ){
      return this.dataStorage.FetchRecipes()
    }
    else{
      return recipes;
    }
  }
}

