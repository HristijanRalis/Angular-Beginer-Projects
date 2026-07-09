import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Mushrooms', 20)],
    ),
    new Recipe(
      'Another Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Mushrooms', 20)],
    ),
    new Recipe(
      'Pizza Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Mushrooms', 20)],
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
