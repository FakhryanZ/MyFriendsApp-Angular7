import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {
  title = 'Welcome To My Friend App!';
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
