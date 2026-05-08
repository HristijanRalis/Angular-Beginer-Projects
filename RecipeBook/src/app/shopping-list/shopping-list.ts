import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
})
export class ShoppingList implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Cucumber', 3)];
  constructor() {}

  ngOnInit(): void {}
}
