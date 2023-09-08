import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes: Routes = [];

  constructor() {
    this.routes = AppRoutingModule.routes[0];
  }
}
