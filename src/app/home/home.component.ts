import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "./../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  title: string = "My Friends App";
  form = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });
  invalidLogin: boolean;

  get username() {
    return this.form.get("username");
  }

  get password() {
    return this.form.get("password");
  }
  constructor(
    private router : Router,
    private authService : AuthService
  ) {}

  signIn(credentials){
    this.authService.login(credentials)
      .subscribe(result =>{
        if (result)
          this.router.navigate(['friend']);
        else
          this.invalidLogin = true;
      });
  }
}
