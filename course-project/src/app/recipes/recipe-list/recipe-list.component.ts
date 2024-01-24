import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() listItemSelection = new EventEmitter<Recipe>();
  public recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'This is a test Recipe 1',
      'https://www.sharmispassions.com/wp-content/uploads/2021/07/MixedVegetableGravy2.jpg'
    ),
    new Recipe(
      'Test Recipe 2',
      'This is a test Recipe 2',
      'https://www.sharmispassions.com/wp-content/uploads/2021/07/MixedVegetableGravy2.jpg'
    ),
    new Recipe(
      'Test Recipe 3',
      'This is a test Recipe 3',
      'https://www.sharmispassions.com/wp-content/uploads/2021/07/MixedVegetableGravy2.jpg'
    ),
    new Recipe(
      'Test Recipe 4',
      'This is a test Recipe 4',
      'https://www.sharmispassions.com/wp-content/uploads/2021/07/MixedVegetableGravy2.jpg'
    ),
  ];

  onItemSelection(recipe: Recipe): void {
    this.listItemSelection.emit(recipe);
  }
}
