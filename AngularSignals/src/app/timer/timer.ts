import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})
export class Timer {
  seconds = signal(0);
  private intervalId: any;

  startTimer() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => this.seconds.update((v) => v + 1), 1000);
    }
  }

  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  restartTimer() {
    this.stopTimer();
    this.seconds.set(0);
  }
}
