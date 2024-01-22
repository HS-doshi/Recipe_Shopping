import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  user: { id: number, name: string };
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }
  users = [
    {
      id: 1,
      name: 'Heet'
    },
    {
      id: 2,
      name: 'Prince'
    },
    {
      id: 3,
      name: 'Vansh'
    },
    {
      id: 4,
      name: 'Dev'
    },
  ]
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    // below it's observable concept!!
    //changes not reflect.
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'],
            this.user.name = params['name'];
        }
      );
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
