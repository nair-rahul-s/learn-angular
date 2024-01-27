import { Component, Input } from '@angular/core';
import { RecipeService } from '../../shared/recipe/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  constructor(private _recipeService: RecipeService) {}

  @Input() recipe: Recipe;

  onAddIngredientsToShoppingList() {
    this._recipeService.addIngredientsToShoppingList(this.recipe._ingredients);
  }
}
