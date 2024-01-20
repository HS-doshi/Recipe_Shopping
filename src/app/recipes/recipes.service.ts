import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    private recipe: Recipe[] = [
        new Recipe('Test Recipe 1 ', 'This is Sunday Recipe', 'https://images.unsplash.com/photo-1583195250383-ebf0d9341d70?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8SVRjb21wYW55fHx8fHx8MTcwNTU3NDA1NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920'),
        new Recipe('Test Recipe 2 ', 'This is MOnday Recipe', 'https://images.unsplash.com/photo-1539626845749-3d350356324c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8a2l0ZXx8fHx8fDE3MDU0ODA1MjM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920')
    ]
    getRecipes() {
        //slice will return new array with a copy of this service file.
        // we only get a copy & can't access outside. 
        return this.recipe.slice();
    }

}