import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerService } from '../server.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit {

  server: { id: number, name: string, status: string };

  constructor(private servsersService: ServerService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server']
      }
    );

    // const id = +this.route.snapshot.params['id'];
    // this.server = this.servsersService.getServer(id);
    // this.route.params
    //   .subscribe(
    //     (
    //       (params: Params) => {
    //         this.server = this.servsersService.getServer(+params['id']);
    //       }
    //     )
    //   )
  }
  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }
}
