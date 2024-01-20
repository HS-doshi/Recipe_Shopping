export class CounterService {
    activetoInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactive() {
        this.activetoInactiveCounter++;
        console.log('InActive Count : ' + this.activetoInactiveCounter);

    }
    incrementInActiveToActive() {
        this.inactiveToActiveCounter++;
        console.log('Active Count : ' + this.inactiveToActiveCounter);
    }
} 
