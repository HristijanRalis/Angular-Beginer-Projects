import { Component } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',

  standalone: false,
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {
  selectedRecipe: Recipe;
}
