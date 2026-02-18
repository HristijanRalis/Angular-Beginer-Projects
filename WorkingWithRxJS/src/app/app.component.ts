import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
intervalSignal = toSignal(this.interval$, {initialValue: 0})

customIntervals$ = new Observable((subscriber) => {
  let timesExecutes = 0;
  const interval = setInterval(() => {
    if(timesExecutes > 3){
      clearInterval(interval);
      subscriber.complete();
      return;
    }
    console.log('Emitting new value...');
    subscriber.next({message: 'New value'})
    timesExecutes++;
  }, 1000)
} );


  // interval = signal(0);
  // doubleInterval = computed(() => this.interval() * 2);
  private destroyRef = inject(DestroyRef)


  constructor() {
    // effect(() => {
    //   console.log(`Clicked button ${this.clickCount()} times.`);
    // })
  }

  ngOnInit(): void {

    // setInterval(() => {
    //   this.interval.update(prevIntervalNumber => prevIntervalNumber + 1);
    // }, 1000)
  //  const subscription =  interval(1000).pipe(
  //   map((val) => val * 2)
  //  ).subscribe({
  //     next: (val) => console.log(val),
  //   });


  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   })
this.customIntervals$.subscribe({
  next: (val) => console.log(val),
  complete: () => console.log("Complete")
})
 const subscription = this.clickCount$.subscribe({
    next: (val) =>  console.log(`Clicked button ${this.clickCount()} times.`)
  })

     this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }


  onClick() {
    this.clickCount.update(prevCount => prevCount + 1);
  }
}
