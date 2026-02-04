import { Component, Input } from '@angular/core';
import { NewTaskDate } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksServices } from './tasks.service';

@Component({
  selector: 'app-tasks-component',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks-component.component.html',
  styleUrl: './tasks-component.component.css',
})
export class TasksComponentComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isAddingTask = false;

  constructor(private tasksService: TasksServices) {
    this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
