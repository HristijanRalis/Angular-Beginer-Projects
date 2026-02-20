import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dynamic-class-binding',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-class-binding.html',
  styleUrl: './dynamic-class-binding.css',
})
export class DynamicClassBinding {
  isActive = signal(false);

  toggleIsActive() {
    this.isActive.set(!this.isActive());
    console.log('Clicked');
  }
}
