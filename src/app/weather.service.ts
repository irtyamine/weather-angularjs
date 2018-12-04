import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey='53f9d8e4213222cf517d86dc406d67fc';
  url='';

  constructor(private http:Http) {
    this.url='http://api.openweathermap.org/data/2.5/weather'
   }

   getWeather(lng,lat){
     return this.http.get(this.url+'?lat='+lat+'&lon='+lng+'&appid='+this.apiKey);
    // console.log("toasty",lng,' ', lat);
   }

   geoFindMe() {
    // var output = document.getElementById("out");
  
    if (!navigator.geolocation){
      console.log("<p>Geolocation is not supported by your browser</p>");
      return;
    }
  
    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
  
      console.log('<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>');
    }
  
    function error() {
      console.log("Unable to retrieve your location");
    }
  
    console.log("<p>Locating…</p>");
  
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
