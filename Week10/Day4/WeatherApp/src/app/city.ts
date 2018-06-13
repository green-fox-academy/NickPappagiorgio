export class City {
  city: string;
  location: string;
  weather: Object[] = [];

  constructor(city: string, location: string) {
    this.city = city;
    this.location = location;
  }

  createWeather(temp: number, icon: string, message: string) {
    this.weather.push({
      temp: temp,
      icon: icon,
      message: message
    });
  }
}
