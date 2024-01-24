import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from './server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {

  servers_array: { name: string, id: number, status: string }[];

  constructor(private router: Router,
    private route: ActivatedRoute, private serversss: ServerService) {
    this.servers_array = this.serversss.getServers()
  }

  ngOnInit(): void {
  }
  // below it's known as programmtically routing.
  onLoadUser() {
    this.router.navigate(['/users'])
  }
  // angular knows currently active routes is activated route, relatively navigate route.
  onReload() {
    // this.router.navigate(['servers'], { relativeTo: this.route })
  }
}
