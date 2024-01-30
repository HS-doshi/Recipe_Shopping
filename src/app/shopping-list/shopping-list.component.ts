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
  private subscription : Subscription;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingrediants = this.shoppingService.getIngrediant();
     this.subscription =  this.shoppingService.ingrediantChnaged
     .subscribe(
      (ingrediant: Ingrediant[]) => {
        this.ingrediants = ingrediant;
      }
    )
  }
  onEditItem(index : number){
    this.shoppingService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  // onEditItem(index : number){
  //       this.shoppingService.startedEditing.next(index);
  // }
}
