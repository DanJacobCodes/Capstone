import { Component } from '@angular/core';
import {HttpModule} from '@angular/http'
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpModule, AuthenticationService]
})
export class AppComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;
  title = 'Idk';

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
       this.isLoggedIn = false;
     } else {
       this.isLoggedIn = true;
       this.userName = user.displayName;
     }

    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
