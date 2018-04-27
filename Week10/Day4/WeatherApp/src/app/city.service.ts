import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { City } from './city';
import { FORECASTS } from './mock-cities';

@Injectable()
export class CityService {

  getCity(name: string): Observable<City> {
    return of(FORECASTS.find(city => city.city === name));
  }

  getCities(): Observable<City[]> {
    return of(FORECASTS);
  }

  constructor() { }

}
