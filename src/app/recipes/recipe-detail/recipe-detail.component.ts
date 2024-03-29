import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
   recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    // above approach is not feasible & not working as we think.
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }
  onAddToShopping() {
    this.recipeService.addIngrediantToShopping(this.recipe.ingrediants);
  }
  onEditRecipe(){
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo : this.route})
    this.router.navigate(['edit'],{relativeTo: this.route})
  }
  onDeleteRecipe(){
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate(['/recipes'])
  }
}
