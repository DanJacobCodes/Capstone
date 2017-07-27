import { Component, OnInit} from '@angular/core';
import { Home } from '../home.model';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [HomeService]
})

export class WelcomeComponent implements OnInit  {
  homes:FirebaseListObservable<any[]>;

  constructor(private router: Router, private homeService: HomeService) {}

  ngOnInit(){
    this.homes = this.homeService.getHomes();
  }

  goToDetailPage(clickedHome) {
    this.router.navigate(['homes', clickedHome.$key]);
  };

}
