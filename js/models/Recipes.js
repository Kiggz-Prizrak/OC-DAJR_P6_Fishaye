class Recipes {
  constructor(Recipes) {
    this._id = Recipes.id;
    this._name = Recipes.name;
    this._servings = Recipes.servings;
    this._ingredients = Recipes.ingredients;
    this._time = Recipes.time;
    this._description = Recipes.description;
    this._appliance = Recipes.appliance;
    this._ustensils = Recipes.ustensils;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
  get servings() {
    return this._servings;
  }
  get ingredients() {
    return this._ingredients;
  }
  get time() {
    return this._time;
  }
  get description() {
    return this._description;
  }
  get appliance() {
    return this._appliance;
  }
  get ustensils() {
    return this._ustensils
  }
}
