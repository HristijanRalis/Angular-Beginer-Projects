import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-dynamic-list-filter',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-list-filter.html',
  styleUrl: './dynamic-list-filter.css',
})
export class DynamicListFilter {
  fruits = ['banana', 'apple', 'tangerine', 'kiwi', 'orange'];
  filter = signal('');

  filteredItems = computed(() => this.fruits.filter((fruit) => fruit.includes(this.filter())));

  get filteredFruitsArray() {
    return this.filteredItems();
  }
  onFilteredFruits(event: Event) {
    const input = event?.target as HTMLInputElement;

    this.filter.set(input.value);
  }
}
