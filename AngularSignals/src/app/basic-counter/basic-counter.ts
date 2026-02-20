import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-counter',
  imports: [],
  templateUrl: './basic-counter.html',
  styleUrl: './basic-counter.css',
})
export class BasicCounter {
  count = signal(0);

  increment() {
    this.count.update((v) => v + 1);
  }

  decrement() {
    this.count.update((v) => v - 1);
  }
}
