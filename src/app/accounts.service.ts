import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AccountService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      /* onAccountAdded(newAccount: {name: string, status: string}) {
        this.accounts.push(newAccount);
      }
    
      onStatusChanged(updateInfo: {id: number, newStatus: string}) {
        this.accounts[updateInfo.id].status = updateInfo.newStatus;
      } */

      statusUpdated = new EventEmitter();

      constructor(private logginService:LoggingService) {}

      addAccount(name: string, status: string) {
        this.accounts.push({name:name,status:status})
        this.logginService.logToConsole(status)
      }

      updateStatus(id: number, status: string) {
        this.accounts[id].status=status
        this.logginService.logToConsole(status)
      }
}