import { Component } from "@angular/core";

import { SignalComponent } from "./signals/signal.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [SignalComponent],
})
export class AppComponent {}
