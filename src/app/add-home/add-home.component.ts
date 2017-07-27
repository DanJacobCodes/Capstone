import { Component, OnInit } from '@angular/core';
import { Home } from '../home.model';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css']
})
export class AddHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitHomeForm(type:string, address:string, zipcode:number, description:string, price:number, id:string){
    var newHome: Home = new Home(type, address, zipcode, description, price, id);
  }

}
