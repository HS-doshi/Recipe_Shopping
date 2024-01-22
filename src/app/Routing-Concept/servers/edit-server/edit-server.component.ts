import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css'
})
export class EditServerComponent implements OnInit {

  server: { id: number, name: string, status: string };
  serverName: string = ''
  serverStatus: string = ''

  constructor(private serverService: ServerService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParamMap);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();
    this.server = this.serverService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
  onUpdateServer() {
    this.serverService.updateServer(this.server.id, {
      name: this.serverName, status: this.serverStatus
    })
  }

}
