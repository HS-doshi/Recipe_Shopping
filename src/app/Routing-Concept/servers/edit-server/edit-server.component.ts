import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { ActivatedRoute, ActivatedRouteSnapshot, CanDeactivateFn, Params, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css'
})
export class EditServerComponent implements OnInit {

  server: { id: number, name: string, status: string };
  serverName: string = ''
  serverStatus: string = '';
  allowEdit = false;
  changeSaved = false;

  constructor(private serverService: ServerService,
    private route: ActivatedRoute,
    private router: Router) {
  }
  ngOnInit() {
    console.log(this.route.snapshot.queryParamMap);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.server = this.serverService.getServer(id);

    //subscribe route params to update the id if params change
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
  onUpdateServer() {
    this.serverService.updateServer(this.server.id, {
      name: this.serverName, status: this.serverStatus
    })
    this.changeSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route })
  }
  canDeactivate(currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status)
      && !this.changeSaved) {
      return confirm('Do you want to discard the changes?');
    }
    else {
      return true;
    }
  }
}
