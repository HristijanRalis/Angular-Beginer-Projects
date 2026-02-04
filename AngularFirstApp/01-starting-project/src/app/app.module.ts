import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header-component';
import { UserComponent } from './user/user.component';
import { TasksComponentComponent } from './tasks-component/tasks-component.component';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks-component/task/task.component';
import { NewTaskComponent } from './tasks-component/new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponentComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
