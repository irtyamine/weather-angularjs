import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  curent:CurrentWeather

  constructor() { }
}
