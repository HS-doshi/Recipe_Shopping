import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent implements OnInit {

  users: string[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.acativeUSers;

  }
  onSetToInactive(id: number) {
    this.userService.setToActive(id);
  }
}
