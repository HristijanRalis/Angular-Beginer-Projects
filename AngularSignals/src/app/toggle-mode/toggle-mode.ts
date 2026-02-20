import { Component, signal } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-toggle-mode',
  imports: [NgClass],
  templateUrl: './toggle-mode.html',
  styleUrl: './toggle-mode.css',
})
export class ToggleMode {
  isDarkMode = signal(false);

  toggleMode() {
    this.isDarkMode.update((v) => !v);
  }
}
