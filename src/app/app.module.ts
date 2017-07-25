import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HousingFormComponent } from './housing-form/housing-form.component';
import { HousingDataListComponent } from './housing-data-list/housing-data-list.component';
import {Component, Input, Output} from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    ContactComponent,
    LoginComponent,
    HousingFormComponent,
    HousingDataListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
