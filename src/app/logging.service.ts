// This is only service we don't inject anything into this service.
export class LogginService {
    logStatusChange(status: string) {
        console.log('A Server Status changed, new status : ' + status)
    }
} 