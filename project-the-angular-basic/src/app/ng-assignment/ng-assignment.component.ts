import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-assignment',
  templateUrl: './ng-assignment.component.html',
  styleUrl: './ng-assignment.component.css',
})
export class NgAssignmentComponent {
  showSecret = false;
  log: number[] = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
