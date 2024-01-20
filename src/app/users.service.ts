import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
    acativeUSers = ['Max', 'Anna'];
    inactiveUSers = ['Heet', 'Prince'];

    constructor(private counterService: CounterService) { }

    setToActive(id: number) {
        // splice will remove one element.
        this.acativeUSers.push(this.inactiveUSers[id]);
        this.inactiveUSers.splice(id, 1);
        this.counterService.incrementInActiveToActive();
    }
    setToInactive(id: number) {
        this.inactiveUSers.push(this.acativeUSers[id]);
        this.acativeUSers.splice(id, 1);
        this.counterService.incrementActiveToInactive();
    }
}
