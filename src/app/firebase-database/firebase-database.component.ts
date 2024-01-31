import { HttpClient } from '@angular/common/http';
import { Component,  OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Post } from './post.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-firebase-database',
  templateUrl: './firebase-database.component.html',
  styleUrl: './firebase-database.component.css'
})
export class FirebaseDatabaseComponent  implements OnInit{

  loadedPosts :Post[] =[];
  constructor(private http: HttpClient){}

  ngOnInit() {
    this.fetchPosts()
  }
  onCreatepost(postData: Post){
    //send http request
    //post.json - is firebase requirement not angular require.
    // - http request manage by observable.
    // console.log(postData)
    this.http
    .post<{name : string}>
    ('https://angular-guide-fb705-default-rtdb.firebaseio.com/posts.json',
    postData).subscribe((response)=>{
      console.log(response)
    })
  }

  // postData is request body.
  onFetchData(){
    // Send Http request
    this.fetchPosts()
  }

  private fetchPosts(){
    return this.http
      .get<{[key:string] : Post}>
      ('https://angular-guide-fb705-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map((response) => {
          const postArray: Post[] = [];

          for (const key in response)
           {
            if (response.hasOwnProperty(key))
            {
              postArray.push({...response[key], id: key });
            }
          }
          return postArray;
        })
      )
        .subscribe((res)=>{
          console.log(res)
        });
  }

      // (posts)=>{console.log(posts[0].content


}
