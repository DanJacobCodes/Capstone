import { Component} from '@angular/core';
import { Home } from '../home.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent  {
  constructor(private router: Router) {}

  homes: Home[] = [
    new Home("Condo", "1234 Test Street", 19116, "New development", 100000, 1),
    new Home("Townhouse", "2121 Issa Road", 19115, "Personal Garage", 500000, 2),
    new Home("House", "4000 Key Street", 19116, "Under market value", 420000, 3),
    new Home("Studio", "981121 New Ave", 19116, "First month free", 45000, 4)
  ];

  goToDetailPage(clickedHome: Home) {
    this.router.navigate(['homes', clickedHome.id]);
  };

}
