import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Ingredient 1', 5),
    new Ingredient('Ingredient 2', 10),
  ];

  onAddRecipe(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    console.log(" ingredients: " + this.ingredients);
  }
}
