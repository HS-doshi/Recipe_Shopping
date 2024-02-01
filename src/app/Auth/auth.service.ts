import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(private http: HttpClient) { }

  signup(email: string, password : string){
    return  this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCow8sqjaMLI8Ily-086eE0iewlG2BkLf0',
    {
    email : email,
    password: password,
    returnSecuretoken : true
    });
  }
}
