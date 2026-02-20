import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-greeting',
  imports: [],
  templateUrl: './computed-greeting.html',
  styleUrl: './computed-greeting.css',
})
export class ComputedGreeting {
  name = signal('');
  greeting = computed(() => (this.name() ? `Hello, ${this.name()}!` : 'Welcome'));
  updateName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
  }
}
