import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";
import {CurrentWeather} from '../current-weather';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  myWeather:CurrentWeather;

  weather: any;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    if (!navigator.geolocation) {
      console.log("<p>Geolocation is not supported by your browser</p>");
      return;
    }

    const success = pos => {
      let lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      this._weatherService.getWeather(lon, lat)
        .subscribe(
          response => {
        this.weather = response;
        console.log("this is the silly thing i was trying to do ",response);
        this.myWeather = new CurrentWeather(response.name,
                                            response.main.temp,
                                            response.weather[0].icon,
                                            response.weather[0].description,
                                            response.main.temp_max,
                                            response.main.temp_min)
      });
    };
    function error() {
      console.log("Unable to retrieve your location");
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
