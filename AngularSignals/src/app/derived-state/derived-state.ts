import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-derived-state',
  imports: [],
  templateUrl: './derived-state.html',
  styleUrl: './derived-state.css',
})
export class DerivedState {
  price = signal(110);
  tax = signal(0.2);

  totalPrice = computed(() => {
    return this.price() + this.price() * this.tax();
  });
}
