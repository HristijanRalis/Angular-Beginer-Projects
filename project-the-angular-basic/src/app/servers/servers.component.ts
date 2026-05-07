import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',

  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  isSuccess = true;
  isWarning = true;
  status: string = 'offline';

  constructor() {}

  changeStatus() {
    setTimeout(() => {
      this.isSuccess = !this.isSuccess;
      this.isWarning = !this.isWarning;
      this.status = this.status === 'offline' ? 'online' : 'offline';
    }, 2000);
  }

  getButtonClass() {
    return this.isSuccess ? 'btn-danger' : 'btn-success';
  }
}
