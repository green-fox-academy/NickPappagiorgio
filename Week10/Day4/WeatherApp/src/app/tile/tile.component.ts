import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { FORECASTS } from '../mock-cities';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  forecasts = FORECASTS;
  
  selectedForecast: City;

  onSelect(city: City): void {
    this.selectedForecast = city;
    console.log(city.city);
  }

  constructor() { }

  ngOnInit() {
  }

}
