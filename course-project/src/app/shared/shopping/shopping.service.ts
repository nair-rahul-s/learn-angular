import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  constructor() {}

  ingredientAdded = new EventEmitter<Ingredient[]>();

  _ingredients: Ingredient[] = [
    new Ingredient('Ingredient 1', 5),
    new Ingredient('Ingredient 2', 10),
  ];

  get ingredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  onAddIngredientToShoppingList(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients);
    console.log('All ingredients: ' + this.ingredients);
  }

  onAddIngredientsToShoppingList(ingredientsList: Ingredient[]) {
    this._ingredients.push(...ingredientsList);
    this.ingredientAdded.emit(this.ingredients);
  }
}
