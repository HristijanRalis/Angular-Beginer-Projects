import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signal.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalComponent {
  actions: string[] = [];
  counter = signal(0);

  increment() {
    this.counter.update((prev) => prev + 1);
    this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter.update((prev) => prev - 1);
    this.actions.push('DECREMENT');
  }
}
