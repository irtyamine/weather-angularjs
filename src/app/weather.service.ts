import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { map } from "rxjs/operators";

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

  getWeather(lon,lat){
     return this.http.get(this.url+'?lat='+lat+'&lon='+lon+'&appid='+this.apiKey).pipe(map(res => res.json()));
   }
}