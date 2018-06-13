import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CityService } from '../city.service';

import { City } from '../city';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  city: any;

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService
  ) {}

  ngOnInit() {
    this.getCityForecast();
  }

  getCityForecast(): void {
    const name = this.route.snapshot.paramMap.get('city');
    this.cityService.getCity(name).subscribe((data: any) => {
      this.city = new City(data.city.name, data.city.country);
      for (let i = 0; i < 5; i++) {
        const currentData = data.list[i * 8];
        this.city.createWeather(
          Math.round(currentData.main.temp - 273.15),
          currentData.weather[0].main,
          currentData.weather[0].description
        );
      }
    });
  }
}
