import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // recipe array we have to pass square bracket!
  recipes: Recipe[] = [
    new Recipe('Company Image', 'I am a Software Developer', 'https://images.unsplash.com/photo-1583195250383-ebf0d9341d70?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8SVRjb21wYW55fHx8fHx8MTcwNTU3NDA1NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920'),
    new Recipe('Kite Image', 'This is simply Another a testing of kite!!', 'https://images.unsplash.com/photo-1539626845749-3d350356324c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8a2l0ZXx8fHx8fDE3MDU0ODA1MjM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920')
  ];
  constructor() { }
  ngOnInit() { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
