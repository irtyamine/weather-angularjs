import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";
import {CurrentWeather} from "../current-weather";
import { LoaderService } from "../loader.service";

@Component({
  selector: "app-current",
  templateUrl: "./current.component.html",
  styleUrls: ["./current.component.css"]
})
export class CurrentComponent implements OnInit {
  myWeather:CurrentWeather;

  weather: any;

  constructor(private _weatherService: WeatherService, public _loaderService: LoaderService) {}

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
        this._loaderService.display(false);
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