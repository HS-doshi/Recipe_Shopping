export class UserService {
    acativeUSers = ['Max', 'Anna'];
    inactiveUSers = ['Heet', 'Prince'];

    setToActive(id: number) {
        // splice will remove one element.
        this.acativeUSers.push(this.inactiveUSers[id]);
        this.inactiveUSers.splice(id, 1);
    }
    setToInactive(id: number) {
        this.inactiveUSers.push(this.acativeUSers[id]);
        this.acativeUSers.splice(id, 1);
    }
}
