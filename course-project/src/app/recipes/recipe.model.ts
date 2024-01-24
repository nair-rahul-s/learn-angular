export class Recipe {
  public _name: string;
  public _description: string;
  public _imagePath: string;

  constructor(_name: string, _description: string, _imagePath: string) {
    this._name = _name;
    this._description = _description;
    this._imagePath = _imagePath;
  }
}