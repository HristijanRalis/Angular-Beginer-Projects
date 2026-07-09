import { Component, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService){}

  onAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients)
  }
}
