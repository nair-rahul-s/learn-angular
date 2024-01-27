import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shared/shopping/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  constructor(private _shoppingService: ShoppingService) {}

  ingredients: Ingredient[];

  ngOnInit(): void {
    this.ingredients = this._shoppingService.ingredients;
    this._shoppingService.ingredientAdded.subscribe(
      (ingredientsList: Ingredient[]) => {
        console.log("Listened to emitted event");
        this.ingredients = ingredientsList;
      }
    );
  }
}
