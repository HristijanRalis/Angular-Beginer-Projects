import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-component',
  standalone: true,
  imports: [],
  templateUrl: './tasks-component.component.html',
  styleUrl: './tasks-component.component.css'
})
export class TasksComponentComponent {
@Input() name?: string;
}
