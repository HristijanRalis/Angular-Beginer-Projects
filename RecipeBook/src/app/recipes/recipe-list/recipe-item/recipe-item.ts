import { Component, Input } from '@angular/core';

import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  standalone: false,
  templateUrl: './recipe-item.html',
  styleUrl: './recipe-item.css',
})
export class RecipeItem {
  @Input({ required: true }) recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
