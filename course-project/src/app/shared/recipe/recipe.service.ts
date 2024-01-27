import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';
import { Ingredient } from '../ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private _shoppingService: ShoppingService) {}

  public recipeSelected = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'This is a test Recipe 1',
      'https://www.sharmispassions.com/wp-content/uploads/2021/07/MixedVegetableGravy2.jpg',
      [new Ingredient('Ingredient 1', 1), new Ingredient('Ingredient 2', 2)]
    ),
    new Recipe(
      'Test Recipe 2',
      'This is a test Recipe 2',
      'https://www.sharmispassions.com/wp-content/uploads/2021/07/MixedVegetableGravy2.jpg',
      [new Ingredient('Ingredient 3', 1), new Ingredient('Ingredient 4', 2)]
    ),
    new Recipe(
      'Test Recipe 3',
      'This is a test Recipe 3',
      'https://www.sharmispassions.com/wp-content/uploads/2021/07/MixedVegetableGravy2.jpg',
      [new Ingredient('Ingredient 5', 1), new Ingredient('Ingredient 6', 2)]
    ),
    new Recipe(
      'Test Recipe 4',
      'This is a test Recipe 4',
      'https://www.sharmispassions.com/wp-content/uploads/2021/07/MixedVegetableGravy2.jpg',
      [new Ingredient('Ingredient 7', 1), new Ingredient('Ingredient 8', 2)]
    ),
  ];

  get recipes(): Recipe[] {
    return this._recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this._shoppingService.onAddIngredientsToShoppingList(ingredients);
  }
}
