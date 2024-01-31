import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { catchError, map } from 'rxjs/operators';
import { Subject , throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  error  =new Subject<string>();

  constructor(private http : HttpClient) { }

  createAndStorePost(title : string , content : string, id :string){

    const postData  : Post = {title :title , content : content , id:id }
    this.http.post<{name:string}>(
      'https://angular-guide-fb705-default-rtdb.firebaseio.com/posts.json',
      postData,{
        observe : 'response'
      }
    ).subscribe(responsedata=>{
      console.log(responsedata)
    },
    error=>{
      this.error.next(error.message)
    })
  }

  fetchPosts(){
    let searchParams = new HttpParams()
    searchParams = searchParams.append('print' , 'preety!');
    searchParams = searchParams.append('heet' , 'key')
    return this.http
    .get<{[key:string]:Post}>
    ('https://angular-guide-fb705-default-rtdb.firebaseio.com/posts.json',
    {
      headers : new HttpHeaders({"custom-header":'Hello'}),
      params : searchParams,
      responseType: 'json'
      // params will add a print preety after json link.
      })
    .pipe(
      map(response=>{
        const postArray : Post[] = [];

        for(const  key in response){
          if(response.hasOwnProperty(key)){
            postArray.push({...response[key], id:key})
          }
        }
        return postArray;
      }),
      catchError(errorRs =>{
        // send to analytics server.
        return  throwError(errorRs);
      })
    )
  }
  deletePost(){
    return this.http.delete('https://angular-guide-fb705-default-rtdb.firebaseio.com/posts.json',
    {
      observe: 'events',
       responseType: 'text'
    }).pipe(
      tap(event=>{
      console.log(event)
        if(event.type === HttpEventType.Response){
          console.log(event.body)
        }
        if(event.type === HttpEventType.Response){
          console.log(event.body)
        }
    }));
  }
}
