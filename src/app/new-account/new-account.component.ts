import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  /* @Output() accountAdded = new EventEmitter<{name: string, status: string}>(); */

  constructor(private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status:string) => alert('New Status: ' + status)
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    /* this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
 */
    this.accountService.addAccount(accountName,accountStatus)
  }
}
