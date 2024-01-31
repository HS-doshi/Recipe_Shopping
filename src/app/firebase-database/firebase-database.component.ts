import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-firebase-database',
  templateUrl: './firebase-database.component.html',
  styleUrl: './firebase-database.component.css'
})
export class FirebaseDatabaseComponent  implements OnInit{

  constructor(private http: HttpClient){}

  ngOnInit(): void {

  }
  onCreatepost(postData:{title:string , content : string}){
    //send http request
    //post.json - is firebase requirement not angular require.
    // - http request manage by observable.
    console.log(postData)
    this.http.post('https://angular-guide-fb705-default-rtdb.firebaseio.com/posts.json',
    {postData})
    .subscribe(responseData=>{
      console.log(responseData)
    });
  }
  // postData is request body.
  onFetchData(){
    // Senf Http request

  }
}
