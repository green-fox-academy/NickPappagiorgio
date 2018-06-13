import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CityService {
  getCity(cityName: string) {
    return this.http.get<JSON>(
      `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=5130a7c5d1ff5e2c82fe7d0144f1dd77`
    );
  }
  constructor(private http: HttpClient) {}
}
