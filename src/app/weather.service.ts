import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey='53f9d8e4213222cf517d86dc406d67fc';
  url='http://api.openweathermap.org/data/2.5/weather';

  constructor(private http:Http) {
    this.url='http://api.openweathermap.org/data/2.5/weather'
   }

   getWeather(long,lat){
     return this.http.get(url: this.url+'?lat='+lat+'&lon='+long+'&appid='+this.apiKey)
   }
}
