import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Home } from '../home.model';
import { HomeService } from '../home.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  providers:[HomeService]
})
export class HomeDetailComponent implements OnInit {
  homeID: number = null;
  homeToDisplay;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.homeID = parseInt(urlParameters['id']);
   });
   this.homeToDisplay = this.homeService.getHomeById(this.homeID)
  }

}
