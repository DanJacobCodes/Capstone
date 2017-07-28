import { Component, Input, OnInit } from '@angular/core';
import { Home } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css'],
  providers: [HomeService]
})
export class EditHomeComponent implements OnInit {
  @Input() selectedHome;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  updateHome(homeToUpdate){
    this.homeService.updateHome(homeToUpdate);
  }

  deletingHome(homeToDelete){
    if(confirm("Are you sure you want to delete this home?")){
      this.homeService.deleteHome(homeToDelete);
    }
  }
}
