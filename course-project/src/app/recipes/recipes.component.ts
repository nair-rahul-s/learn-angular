import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../shared/recipe/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {
  recipeToDisplay: Recipe;

  constructor(private _recipeService: RecipeService) {}

  ngOnInit(): void {
    this._recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.recipeToDisplay = recipe;
    });
  }
}
