import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  // recipe array we have to pass square bracket!
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
    private router : Router, private route : ActivatedRoute) {
  }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe(){
        this.router.navigate(['new'], {relativeTo: this.route});
  }
}
