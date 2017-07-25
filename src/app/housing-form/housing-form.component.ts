import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HomeStatsService } from '../home-stats.service';

@Component({
  selector: 'app-housing-form',
  templateUrl: './housing-form.component.html',
  styleUrls: ['./housing-form.component.css'],
  providers: [ HomeStatsService ]
})

export class HousingFormComponent {

  housing_data: any[]=null;

  constructor(private homeStats: HomeStatsService) { }
  getHousingInfo(address: string, zipcode: string) {
    this.homeStats.getByAddressAndZip(address, zipcode).subscribe(response => {
      this.housing_data = response.json();
    });
  }
}
