import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../../shared/shopping/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private _shoppingService: ShoppingService) {}

  onAddIngredient() {
    const ingredientName: string = this.nameInput.nativeElement.value;
    const ingredientAmount: number = this.amountInput.nativeElement.value;
    const ingredient: Ingredient = new Ingredient(
      ingredientName,
      ingredientAmount
    );
    console.log(
      ' Added Ingredient from shopping edit component: ' +
        ingredientName +
        ' ' +
        ingredientAmount
    );
    this._shoppingService.onAddIngredientToShoppingList(ingredient);
  }
}
