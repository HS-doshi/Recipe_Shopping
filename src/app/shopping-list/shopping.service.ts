import { Injectable } from "@angular/core";
import { Ingrediant } from "../shared/ingrediant.model";
import { Subject } from "rxjs";

@Injectable()
export class ShoppingService {

    ingrediantChnaged = new Subject<Ingrediant[]>();
    // Add Ingrediants.
    startedEditing = new Subject<number>();

    private ingrediant: Ingrediant[] = [
        new Ingrediant('Cricket', 11),
        new Ingrediant('Football', 10)
    ]
    getIngrediant() {
        // slice method used for only copy of it we can acces through this.
        return this.ingrediant.slice();
    }
    getIngredient(index:number){
      return this.ingrediant[index];
    }

    addIngrediant(ingrediants: Ingrediant) {
        this.ingrediant.push(ingrediants);
        this.ingrediantChnaged.next(this.ingrediant.slice());
    }

    addIngrediants(ingrediants: Ingrediant[]) {
        // for (let ingrediant of ingredian) {
        //     this.addIngrediant(ingrediant);
        // }
        // ES6 Feature!  - below feature handle multiple objects.
        this.ingrediant.push(...ingrediants)
        this.ingrediantChnaged.next(this.ingrediant.slice());
    }
    updateIngrediant(index:number, newIngrent : Ingrediant ){
      this.ingrediant[index] = newIngrent;
      this.ingrediantChnaged.next(this.ingrediant.slice())
    }
    deleteIngrediant(index : number){
      this.ingrediant.splice(index,1);
      this.ingrediantChnaged.next(this.ingrediant.slice())
    }
}
