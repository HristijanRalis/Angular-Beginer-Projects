import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg',
    ),
    new Recipe(
      'Another Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg',
    ),
    new Recipe(
      'Pizza Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg',
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
