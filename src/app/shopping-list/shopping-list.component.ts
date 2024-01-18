import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {

  ingrediant: Ingrediant[] = [
    new Ingrediant('Apples', 5),
    new Ingrediant('Mangoes', 10)
  ]
  constructor() { }
  ngOnInit(): void { }

  onIngrediantAdded(ingrediant: Ingrediant) {
    this.ingrediant.push(ingrediant)
  }
}
