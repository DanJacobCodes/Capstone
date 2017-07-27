import { Component, OnInit } from '@angular/core';
import { Home } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css'],
  providers:[HomeService]
})
export class AddHomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  submitHomeForm(type:string, address:string, zipcode:number, description:string, price:number){
    var newHome: Home = new Home(type, address, zipcode, description, price )
    this.homeService.addHome(newHome);
  }

}
