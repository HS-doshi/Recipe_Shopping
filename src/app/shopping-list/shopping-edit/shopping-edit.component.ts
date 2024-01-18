import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingrediant } from '../../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputref: ElementRef;
  @ViewChild('amountInput') amountInputRed: ElementRef;

  @Output() ingrediantAdded = new EventEmitter<Ingrediant>();

  constructor() { }

  ngOnInit(): void { }

  onAddItem() {
    const ingName = this.nameInputref.nativeElement.value;
    const ingAmount = this.amountInputRed.nativeElement.value;

    const newIngrediant = new Ingrediant(ingName, ingAmount);
    this.ingrediantAdded.emit(newIngrediant);
  }
}
