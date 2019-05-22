import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, Http, BaseRequestOptions } from "@angular/http";
import { AuthService } from "./services/auth.service";
import { OrderService } from "./services/order.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MainNavbarComponent } from "./main-navbar/main-navbar.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { FriendsComponent } from "./friends/friends.component";
import { fakeBackendProvider } from "./helpers/fake-backend";
import { MockBackend } from "@angular/http/testing";
import { AuthGuardService } from "./services/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavbarComponent,
    ContactMeComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "contactus", component: ContactMeComponent },
      {
        path: "friend",
        component: FriendsComponent,
        canActivate: [AuthGuardService]
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    OrderService,
    AuthService,
    AuthGuardService,

    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
