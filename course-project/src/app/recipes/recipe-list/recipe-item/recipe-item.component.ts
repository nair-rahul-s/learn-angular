import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../shared/recipe/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  constructor(private _recipeService: RecipeService) {}
  @Input() recipeItem: Recipe;

  onItemClicked(): void {
    this._recipeService.recipeSelected.emit(this.recipeItem);
  }
}
