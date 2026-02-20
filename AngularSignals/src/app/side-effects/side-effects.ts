import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-side-effects',
  imports: [],
  templateUrl: './side-effects.html',
  styleUrl: './side-effects.css',
})
export class SideEffects {
 count = signal(1);

 constructor() {
  effect(() => {
    console.log('Count change: ' , this.count())
  })
 }
}
