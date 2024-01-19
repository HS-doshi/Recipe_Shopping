import { Component, Input } from '@angular/core';
import { LogginService } from '../logging.service';
import { AcccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  // providers: [LogginService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string }
  @Input() id: number;

  constructor(private loggingService: LogginService,
    private accountService: AcccountService) { }

  onSetTo(status: string) {
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    this.accountService.updateStatus(this.id, status)
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }
}
