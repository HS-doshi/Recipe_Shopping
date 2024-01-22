import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  onLoadServer() {
    // complex calculation...
    // /server - absolute path.
    // without slash relative path.
    this.router.navigate(['/servers']);
  }
}
