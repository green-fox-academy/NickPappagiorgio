import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { CityService } from '../city.service';

import { City } from '../city';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  city: string[] = [];
  cities: City[] = [];
  searched: any;
  selectedCity: string;

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.city = window.localStorage.getItem('cities').split(' ');
    if (window.localStorage.getItem('cities') !== '') {
      this.getWeather();
    }
  }

  setSelectedCity(city) {
    this.selectedCity = city;
  }

  addCity() {
    this.cityService
      .getCity(this.searched.toUpperCase())
      .subscribe((data: any) => {
        if (data instanceof HttpErrorResponse) {
          return;
        }
        this.city.push(this.searched.toUpperCase());
        this.cities = [];
        this.getWeather();
      });
  }

  getWeather() {
    this.city.forEach((e: any) => {
      this.cityService.getCity(e).subscribe((data: any) => {
        const newCity = new City(data.city.name, data.city.country);
        newCity.createWeather(
          Math.round(data.list[0].main.temp - 273.15),
          data.list[0].weather[0].main,
          data.list[0].weather[0].description
        );
        this.cities.push(newCity);
      });
      window.localStorage.setItem('cities', this.city.join(' '));
    });
    document.querySelector('input').value = '';
  }

  deleteCity(deleteCity) {
    const cityIndex = this.city.indexOf(deleteCity);
    this.city.splice(cityIndex, 1);
    if (this.city.length === 0) {
      window.localStorage.removeItem('cities');
      this.cities = [];
    } else {
      window.localStorage.setItem('cities', this.city.join(' '));
      this.cities = [];
      if (window.localStorage.getItem('cities') !== '') {
        this.getWeather();
      }
    }
  }
}
