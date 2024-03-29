import {  Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingrediant } from "../shared/ingrediant.model";
import { ShoppingService } from "../shopping-list/shopping.service";
import { Subject } from "rxjs";

// we need to access shopping list service for that we need to import inject.
@Injectable()
export class RecipeService {

  recipesChanged  = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //      new Recipe('Test Recipe 1 ',
    //     'Chocolate Recipe',
    //     'https://images.unsplash.com/photo-1602540738621-e7dfebf0af79?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8e2Nob2NvbGF0ZX18fHx8fHwxNzA1OTAyNzMz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920',
    //         [
    //             new Ingrediant('Milk', 2),
    //             new Ingrediant('Chocolate Slab', 2),
    //             new Ingrediant('Weap cream', 3),
    //         ]),
    //     new Recipe('Test Recipe 2 ',
    //     'Ice Cream Recipe',
    //     'https://images.unsplash.com/photo-1516043827470-d52c543c438f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8e2ljZS1jcmVhbX18fHx8fHwxNzA1OTAzNDIx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920',
    //         [
    //             new Ingrediant('Custor Powder', 2),
    //             new Ingrediant('Weap Cream', 3),
    //             new Ingrediant('Chocolate Slicy', 5),
    //         ])
    // ];
    private recipes : Recipe[] =[];

    constructor(private slService: ShoppingService) {}

    setRecipes(recipe  :Recipe[]){
      this.recipes = recipe;
      this.recipesChanged.next(this.recipes.slice())
    }

    getRecipes() {
        //slice will return new array with a copy of this service file.
        //we only get a copy & can't access outside.
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        // slice will give us a copy of array.
        return this.recipes[index];
    }
    addIngrediantToShopping(ingrediants: Ingrediant[]) {
        this.slService.addIngrediants(ingrediants);
    }
    addRecipe(recipe : Recipe){
      this.recipes.push(recipe)
      this.recipesChanged.next(this.recipes.slice())
    }
    updatedRecipe(index : number, newRecipe : Recipe){
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice())
    }
    deleteRecipe(index: number){
      this.recipes.splice(index,1);
      this.recipesChanged.next(this.recipes.slice())
    }
}
