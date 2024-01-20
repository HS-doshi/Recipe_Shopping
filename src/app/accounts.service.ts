import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./logging.service";

@Injectable()
export class AcccountService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Test Account',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        },
    ];
    statusUpdated = new EventEmitter<string>();

    constructor(private logginService: LogginService) { }
    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.logginService.logStatusChange(status)
    }
    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.logginService.logStatusChange(status)
    }
}