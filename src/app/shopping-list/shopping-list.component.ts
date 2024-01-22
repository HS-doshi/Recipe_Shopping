import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';
import { ShoppingService } from './shopping.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  providers: [ShoppingService]
})
export class ShoppingListComponent implements OnInit {

  ingrediants: Ingrediant[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingrediants = this.shoppingService.getIngrediant();
    this.shoppingService.ingrediantChnaged.subscribe(
      (ingrediant: Ingrediant[]) => {
        this.ingrediants = ingrediant;
      }
    )
  }
}
