import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WorkerComponent } from '../../shared/components/worker/worker';
import { Worker } from '../../shared/models/worker.model';
import { DUMMY_USERS } from '../../../dummy-users';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterLink, WorkerComponent],
  templateUrl: './about-us.html',
  styleUrls: ['./about-us.css'],
})
export class AboutUs {
  workers: Worker[] = DUMMY_USERS;
  selectedWorker?: Worker;

  onSelectWorker(worker: Worker) {
    this.selectedWorker = worker;
  }
}
