import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './auth/user.model';
import { catchError, tap } from 'rxjs/operators';

interface AuthResponseData{
  idToken : string,
  email : string,
  refreshToekn : string,
  expireIn : string,
  kind : string,
  registered? : boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new Subject<User>();

  constructor(private http: HttpClient) { }

  signup(email: string, password : string){
    return  this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCow8sqjaMLI8Ily-086eE0iewlG2BkLf0',
    {
    email : email,
    password: password,
    returnSecuretoken : true
    }
    )
  }
}
