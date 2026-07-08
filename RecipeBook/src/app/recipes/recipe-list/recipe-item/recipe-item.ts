import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  standalone: false,
  templateUrl: './recipe-item.html',
  styleUrl: './recipe-item.css',
})
export class RecipeItem {
  @Input({required: true}) recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  onSelect() {
    this.recipeSelected.emit();
  }
}
