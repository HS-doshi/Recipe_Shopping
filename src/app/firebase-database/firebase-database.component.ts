import { HttpClient } from '@angular/common/http';
import { Component,  OnDestroy,  OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-firebase-database',
  templateUrl: './firebase-database.component.html',
  styleUrl: './firebase-database.component.css'
})
export class FirebaseDatabaseComponent  implements OnInit , OnDestroy{

  loadedPosts :Post[] =[];
  isLoading = false;
  error = null;
  private errorSub : Subscription;

  constructor(private http: HttpClient,
    private postService  :PostService){}

  ngOnInit() {
    this.errorSub =  this.postService.error.subscribe(errormessgae=>{
      this.error = errormessgae;
    })
    this.isLoading = true;
    this.postService.fetchPosts().subscribe(posts=>{
      this.isLoading = false;
      this.loadedPosts = posts;
    },
    error=>{
      this.error=error.message;
    });
  }
  onCreatepost(postData: Post){
    //send http request
    //post.json - is firebase requirement not angular require.
    // - http request manage by observable.
    // console.log(postData)
    this.postService.createAndStorePost(postData.title, postData.content  , postData.content)
  }

  // postData is request body.
  onFetchData(){
    // Send Http request
    this.isLoading = true;
    this.postService.fetchPosts().subscribe(posts=>{
      this.isLoading = false;
      this.loadedPosts = posts;
    },error=>{
      this.isLoading = false;
      this.error.next(error.message)
    })
  }
  onClearPost(){
    this.postService.deletePost().subscribe(()=>{
        this.loadedPosts = [];
    });
  }
  handleButton(){
    this.error = null;
  }
  ngOnDestroy()  {
    this.errorSub.unsubscribe();
  }
}
