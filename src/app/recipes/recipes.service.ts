import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingrediant } from "../shared/ingrediant.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipe: Recipe[] = [
        new Recipe('Test Recipe 1 ', 'Chocolate Recipe', 'https://images.unsplash.com/photo-1602540738621-e7dfebf0af79?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8e2Nob2NvbGF0ZX18fHx8fHwxNzA1OTAyNzMz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920',
            [
                new Ingrediant('Milk', 2),
                new Ingrediant('Chocolate Slab', 2),
                new Ingrediant('Weap cream', 3),
            ]),
        new Recipe('Test Recipe 2 ', 'Ice Cream Recipe', 'https://images.unsplash.com/photo-1529688499411-262f191fe29e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8e2ljZWNyZWFtfXx8fHx8fDE3MDU5MDI5MTc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920',
            [
                new Ingrediant('Custor Powder', 2),
                new Ingrediant('Weap Cream', 3),
                new Ingrediant('Chocolate Slicy', 5),
            ])
    ];
    getRecipes() {
        //slice will return new array with a copy of this service file.
        // we only get a copy & can't access outside. 
        return this.recipe.slice();
    }

}