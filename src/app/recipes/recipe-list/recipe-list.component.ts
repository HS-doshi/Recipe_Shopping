import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  // recipe array we have to pass square bracket!
  recipes: Recipe[] = [
    new Recipe('Kite Image', 'This is simply a testing of kite!!', 'https://images.unsplash.com/photo-1539626845749-3d350356324c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8a2l0ZXx8fHx8fDE3MDU0ODA1MjM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920'),
    new Recipe('Kite Image', 'This is simply a testing of kite!!', 'https://images.unsplash.com/photo-1539626845749-3d350356324c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8a2l0ZXx8fHx8fDE3MDU0ODA1MjM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920')
  ];

  constructor() { }
  ngOnInit() { }
}
