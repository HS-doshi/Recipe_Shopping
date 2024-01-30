import { Component,  OnDestroy,  OnInit, Output, ViewChild } from '@angular/core';
import { Ingrediant } from '../../shared/ingrediant.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit , OnDestroy {

  // @ViewChild('nameInput') nameInputref: ElementRef;
  // @ViewChild('amountInput') amountInputRed: ElementRef;
  @ViewChild('f', {static: false}) slForm : NgForm
  subscrption : Subscription
  editMode = false;
  editedItemIndex : number;
  editedItem : Ingrediant

  constructor(private selectedService: ShoppingService) { }

  ngOnInit() {
   this.subscrption = this.selectedService.startedEditing
      .subscribe(
        (index:number)=>{
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.selectedService.getIngredient(index);
          this.slForm.setValue({
            name : this.editedItem.name,
            amount : this.editedItem.amount
          })
        }
      );
   }
   onSubmit(form : NgForm) {
    const value = form.value;
    const newIngrediant = new Ingrediant(value.name, value.amount);
    if(this.editMode){
      this.selectedService.updateIngrediant(this.editedItemIndex,newIngrediant);
    }
    else{
      this.selectedService.addIngrediant(newIngrediant);
    }
    this.editMode = false;
    form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.selectedService.deleteIngrediant(this.editedItemIndex);
    this.onClear();
  }
  ngOnDestroy() {
    this.subscrption.unsubscribe();
  }
}
