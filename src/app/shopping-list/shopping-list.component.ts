import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  providers: [ShoppingService]
})
export class ShoppingListComponent implements OnInit , OnDestroy{

  ingrediants: Ingrediant[];
  private idChnage : Subscription;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingrediants = this.shoppingService.getIngrediant();
     this.idChnage =  this.shoppingService.ingrediantChnaged
     .subscribe(
      (ingrediant: Ingrediant[]) => {
        this.ingrediants = ingrediant;
      }
    )
  }
  ngOnDestroy(): void {
    this.idChnage.unsubscribe();
  }
}
