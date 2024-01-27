import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  constructor(
    public _name: string,
    public _description: string,
    public _imagePath: string,
    public _ingredients: Ingredient[]
  ) {
    this._name = _name;
    this._description = _description;
    this._imagePath = _imagePath;
    this._ingredients = _ingredients;
  }
}
