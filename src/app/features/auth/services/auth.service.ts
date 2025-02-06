import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { ResetPass } from '../interfaces/reset-pass';
import { ForgetPass } from '../interfaces/forget-pass';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any = null
  local:string ="https://upskilling-egypt.com:3007"
  constructor(private http:HttpClient) { }

  saveUserData(){
    let token = JSON.stringify(localStorage.getItem("token"))
    let decodeToken = jwtDecode(token)
    this.userData = decodeToken
    console.log(this.userData);
    
  }
  getLogin(user:any) : Observable<any>{
    return this.http.post(this.local + '/api/auth/login' , user)
  }
  logOut(){
    return this.http.get(this.local + '/api/auth/logout')
  }
  register(user:any): Observable<any>{
    return this.http.post(this.local + '/api/auth/register' , user)
  }

  forgetPassword(user:any) : Observable<any>{
    return this.http.post(this.local + '/api/auth/forgot-password' , user)
  }

  resetPassword(user:any) : Observable<any>{
    return this.http.post(this.local + '/api/auth/reset-password' , user)
  }
  ChangePass(user:any) : Observable<any>{
    return this.http.post(this.local + '/api/auth/change-password' , user)
  }
}
