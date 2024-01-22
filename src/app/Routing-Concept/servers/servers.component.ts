import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {

  servers = ['Heet', 'Vansh', 'Dev', 'Prince', 'Vinit'];

  constructor(private router: Router,
    private route: ActivatedRoute) { }

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
