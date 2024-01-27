import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/recipe/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  constructor(private _recipeService: RecipeService) { }
  
  public recipeList: Recipe[];

  ngOnInit(): void {
    this.recipeList = this._recipeService.recipes;
  }
}
