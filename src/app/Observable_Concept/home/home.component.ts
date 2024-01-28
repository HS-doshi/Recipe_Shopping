import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
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
    // this.firstObsSubscription = interval(1000).subscribe(count=>{
    //    console.log(count);
    // })
    // observer complete mean done.
    const customInterval  = Observable.create((observer)=>{
      setInterval(()=>{
        let count=0;
        observer.next(count);
        if(count>3){
          observer.error(new Error('Count is greater than 3!'))
        }
        count++;
      },1000)
    });
    this.firstObsSubscription = customInterval.subscribe(data=>{
        console.log(data);
    },error=>{
      console.log(error);
      alert(error)
    })
  }
  onShow(){
    console.log("Hello Heet!! Your work & you're the best!! Best Logical developer of the Year Heet Doshi!! Keep it up! Great work!")
  }
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
