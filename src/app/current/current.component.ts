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
  myWeather: CurrentWeather;
  errorMessage = true;
  weather: any;
  

  constructor(private _weatherService: WeatherService, private _loaderService: LoaderService) {}

  ngOnInit() {
    
    if (!navigator.geolocation) {
      this.errorMessage = true;
      return;
    }

    const success = pos => {
      this.errorMessage= false;
      this._loaderService.display(false);
      let lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      this._weatherService.getWeather(lon, lat)
        .subscribe(
          response => {
            console.log(response);
            this.weather = response;
        this.myWeather = new CurrentWeather(response.name,
                                            response.main.temp,
                                            response.weather[0].icon,
                                            response.weather[0].description,
                                            response.main.temp_max,
                                            response.main.temp_min)
      });
    };
    function error() {
      console.log("this is an error buddy");
      this.errorMessage = true;
      
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }
}