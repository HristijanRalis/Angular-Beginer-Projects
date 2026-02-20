import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicCounter } from './basic-counter/basic-counter';
import { DerivedState } from './derived-state/derived-state';
import { SideEffects } from './side-effects/side-effects';
import { FormSignals } from './form-signals/form-signals';
import { ConditionRenderSignal } from './condition-render-signal/condition-render-signal';
import { ToggleMode } from './toggle-mode/toggle-mode';
import { ComputedGreeting } from './computed-greeting/computed-greeting';
import { DynamicClassBinding } from './dynamic-class-binding/dynamic-class-binding';
import { DynamicListFilter } from './dynamic-list-filter/dynamic-list-filter';
import { Timer } from './timer/timer';

@Component({
  selector: 'app-root',
  imports: [
    BasicCounter,
    DerivedState,
    SideEffects,
    FormSignals,
    ConditionRenderSignal,
    ToggleMode,
    ComputedGreeting,
    DynamicClassBinding,
    DynamicListFilter,
    Timer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AngularSignals');
}
