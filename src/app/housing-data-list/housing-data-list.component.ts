import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-housing-data-list',
  templateUrl: './housing-data-list.component.html',
  styleUrls: ['./housing-data-list.component.css'],
  providers: [ ]
})
export class HousingDataListComponent {

  @Input() childHousingData;
  constructor() { }


}
