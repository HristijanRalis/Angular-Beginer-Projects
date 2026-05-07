import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServerComponent } from './server/server.component';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormComponent } from './form/form.component';
import { NgAssignmentComponent } from './ng-assignment/ng-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    NgAssignmentComponent,
  ],
  imports: [BrowserModule, FormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
