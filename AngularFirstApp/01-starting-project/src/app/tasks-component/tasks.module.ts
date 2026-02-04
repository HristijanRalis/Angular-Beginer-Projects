import { NgModule } from '@angular/core';
import { TasksComponentComponent } from './tasks-component.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/card/shared.module';

@NgModule({
  declarations: [TasksComponentComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponentComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
