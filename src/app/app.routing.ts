import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { HttpModule } from '@angular/http';
import { HousingFormComponent } from './housing-form/housing-form.component';
import { LoginComponent } from './login/login.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';



const appRoutes: Routes = [

  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'welcome',
    component: WelcomeComponent

  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'housing-form',
    component: HousingFormComponent
  },

  {
    path: 'homes/:id',
    component: HomeDetailComponent
  }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
