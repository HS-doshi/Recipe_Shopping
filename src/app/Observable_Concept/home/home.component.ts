import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription, interval } from 'rxjs';
import { count } from 'rxjs-compat/operator/count';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit , OnDestroy{

  private firstObsSubscription : Subscription;
  constructor(){}

  ngOnInit() {
    this.firstObsSubscription = interval(1000).subscribe(count=>{
      console.log(count);
    })
  }
  onShow(){
    console.log("Hello Heet!! Your work & you're the best!! Best Logical developer of the Year Heet Doshi!! Keep it up! Great work!")
  }
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}