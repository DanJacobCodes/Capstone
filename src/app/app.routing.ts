import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '/welcome/welcome.component';
import { NavbarComponent } from '/navbar/navbar.component';
import { routing } from './app.routing';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent

  },



];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
