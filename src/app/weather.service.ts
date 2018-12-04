import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { map } from "rxjs/operators";

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class WeatherService {

  apiKey='53f9d8e4213222cf517d86dc406d67fc';
  url;
  lat;
  lon;
  location = 'toasty';

  constructor(private http:Http) {
    this.url='http://api.openweathermap.org/data/2.5/weather'
    
   }

   geoFindMe() {
    // var output = document.getElementById("out");
  
    if (!navigator.geolocation){
      console.log("<p>Geolocation is not supported by your browser</p>");
      return;
    }
  
    function success(position) {
      this.location = position.coords;
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
  
      console.log('<p>Latitude is ' + lat + '° <br>Longitude is ' + lon + '°</p>' + this.location);
    }
  
    function error() {
      console.log("Unable to retrieve your location");
    }
  
    console.log("<p>Locating…</p>");
  
    navigator.geolocation.getCurrentPosition(success, error);
  }

  getWeather(lng,lat){
     return this.http.get(this.url+'?lat='+lat+'&lon='+lng+'&appid='+this.apiKey).pipe(map(res => res.json()));
   }
}
