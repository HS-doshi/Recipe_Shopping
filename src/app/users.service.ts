export class UserService {
    acativeUSers = ['Max', 'Anna'];
    inactiveUSers = ['Heet', 'Prince'];

    setToActive(id: number) {
        this.acativeUSers.push(this.inactiveUSers[id]);
        this.inactiveUSers.splice(id, 1);
    }
    setToInactive(id: number) {
        this.inactiveUSers.push(this.inactiveUSers[id]);
        this.acativeUSers.splice(id, 1);
    }
}
