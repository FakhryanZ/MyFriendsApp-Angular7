import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import { tokenNotExpired, JwtHelper } from "angular2-jwt";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,private http : Http) { }
  
  login(credentials){
    return this.http.post('/api/authenticate',
    JSON.stringify(credentials))
    .map(response=> {
      let result = response.json();
      if (result && result.token){
        localStorage.setItem('token', result.token);
        return true;
      }
      return false;
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  isLoggedIn(){
    return localStorage.getItem("token") != null;
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;
    return new JwtHelper().decodeToken(token);
  }
}
