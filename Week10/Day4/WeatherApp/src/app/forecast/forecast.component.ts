import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TileComponent } from '../tile/tile.component';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})

export class ForecastComponent implements OnInit {

  @Input() city: City;

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCity();
  }

  getCity(): void {
    const city = this.route.snapshot.paramMap.get('city');
    this.cityService.getCity(city)
      .subscribe(city => this.city = city);
  }

  goBack(): void {
    this.location.back();
  }
}
