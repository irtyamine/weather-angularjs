import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Forecast } from '../models/forecast.model'

@Injectable(
  {
    providedIn: 'root'
  }
)
export class WeatherService {
  
  apiKey='53f9d8e4213222cf517d86dc406d67fc';
  url;

  constructor(private http:Http) {
    this.url='http://api.openweathermap.org/data/2.5/weather'
   }

  getWeather(lon, lat): Promise<Forecast> {
     return this.http.get(
       `${this.url}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`)
       .toPromise()
       .then((response) => {
        return response.json() as Forecast;
       })
   }
}