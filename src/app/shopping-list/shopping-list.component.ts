import { Component, OnInit } from '@angular/core';
import { ingrediants } from '../shared/ingrediant.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {

  ingrediant: ingrediants[] = [
    new ingrediants('Apples', 5),
    new ingrediants('Mangoes', 10)
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
