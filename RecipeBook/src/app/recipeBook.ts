import { Component, signal } from '@angular/core';

@Component({
  selector: 'recipe-book-root',
  templateUrl: './recipeBook.html',
  standalone: false,
  styleUrl: './recipeBook.css'
})
export class RecipeBook {
  protected readonly title = signal('RecipeBook');
}
