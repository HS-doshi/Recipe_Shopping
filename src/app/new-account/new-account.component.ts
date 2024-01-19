import { Component, EventEmitter, Output } from '@angular/core';
import { LogginService } from '../logging.service';
import { AcccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css',
  // providers: [LogginService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private loggingService: LogginService,
    private accountService: AcccountService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status : ' + status)
    );
  }


  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus)
    // this.loggingService.logStatusChange(accountStatus);

    //Below is manual service call which is very bad to use.
    // const service = new LogginService();
    // service.logStatusChange(accountStatus)
    // console.log('A server status chanegs, new status : ' + accountStatus)
  }
}
