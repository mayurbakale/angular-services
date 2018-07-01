import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountService: AccountService) {}

  onSetTo(status: string) {
    /* this.statusChanged.emit({id: this.id, newStatus: status}); */
    this.accountService.statusUpdated.emit(status)
    this.accountService.updateStatus(this.id,status)
    //console.log('A server status changed, new status: ' + status);
  }
}
