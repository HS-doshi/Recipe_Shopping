import { EventEmitter, Injectable } from "@angular/core";
import { Ingrediant } from "../shared/ingrediant.model";

@Injectable()
export class ShoppingService {

    ingrediantChnaged = new EventEmitter<Ingrediant[]>();
    // Add Ingrediants.
    private ingrediant: Ingrediant[] = [
        new Ingrediant('Cricket', 11),
        new Ingrediant('Football', 10)
    ]
    constructor() { }
    getIngrediant() {
        // slice method used for only copy of it we can acces through this.
        return this.ingrediant.slice();
    }

    addIngrediant(ingrediants: Ingrediant) {
        this.ingrediant.push(ingrediants);
        this.ingrediantChnaged.emit(this.ingrediant.slice());
    }
}