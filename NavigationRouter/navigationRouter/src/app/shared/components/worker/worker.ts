import { Component, Input } from '@angular/core';
import { Worker } from '../../models/worker.model';

@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [],
  templateUrl: './worker.html',
  styleUrl: './worker.css',
})
export class WorkerComponent {
  @Input() worker!: Worker;
}
