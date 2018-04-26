import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { FORECASTS } from '../mock-cities';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  forecasts = FORECASTS;

  constructor() { }

  ngOnInit() {
  }

}
