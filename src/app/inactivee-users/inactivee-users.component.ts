import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactivee-users',
  templateUrl: './inactivee-users.component.html',
  styleUrl: './inactivee-users.component.css'
})
export class InactiveeUsersComponent implements OnInit {

  Users: string[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.Users = this.userService.inactiveUSers;
  }

  onSetToActive(id: number) {
  }
}
