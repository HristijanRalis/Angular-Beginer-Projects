import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-condition-render-signal',
  imports: [],
  templateUrl: './condition-render-signal.html',
  styleUrl: './condition-render-signal.css',
})
export class ConditionRenderSignal {
  isLoggedIn = signal(false);

  logIn() {
    this.isLoggedIn.set(true);
  }

  logOut() {
    this.isLoggedIn.set(false);
  }
}
