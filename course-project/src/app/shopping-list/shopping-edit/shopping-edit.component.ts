import {
  Component,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() addRecipe = new EventEmitter<Ingredient>();

  onAddIngredient() {
    const ingredientName: string = this.nameInput.nativeElement.value;
    const ingredientAmount: number = this.amountInput.nativeElement.value;
    const ingredient: Ingredient = new Ingredient(
      ingredientName,
      ingredientAmount
    );
    console.log(
      ' From shopping edit component: ' +
        ingredientName +
        ' ' +
        ingredientAmount
    );
    this.addRecipe.emit(ingredient);
    console.log("Yum");
  }
}
