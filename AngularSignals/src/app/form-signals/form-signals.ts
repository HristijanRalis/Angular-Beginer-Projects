import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-form-signals',
  imports: [],
  templateUrl: './form-signals.html',
  styleUrl: './form-signals.css',
})
export class FormSignals {
  name = signal('');

  onInput(event: Event) {
    const input = event?.target as HTMLInputElement;
    this.name.set(input.value);
  }
}
