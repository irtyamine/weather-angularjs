import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";
import {CurrentWeather} from "../current-weather";
import { LoaderService } from "../loader.service";
import { Forecast } from './forecast.model';

@Component({
  selector: "app-current",
  templateUrl: "./current.component.html",
  styleUrls: ["./current.component.scss"]
})
export class CurrentComponent implements OnInit {
  myWeather: CurrentWeather;
  error: string = '';
  forecast: Forecast;

  constructor(private _weatherService: WeatherService, private _loaderService: LoaderService) {}

  ngOnInit() {
    
    if (!navigator.geolocation) {
      this.error = 'geolocation not support';
      return;
    }

    this.getForecast(); // making sure that 'this' inside callbacks is the class 'this'.
  }

  getForecast() {
    navigator.geolocation.getCurrentPosition(this.successHandler.bind(this), this.errorHandler.bind(this));
  }

  errorHandler() {
    this.error = 'unable to get location';
  }

  successHandler(position) {
    this.forecast = undefined;
    // 'this' refers to the class now
    this._weatherService.getWeather(position.coords.longitude, position.coords.latitude).then((response) => {
      this.forecast = response;
    }, (error) => {
      //error.statusCode
      this.error = 'unable to get the weather';
    });
  }
}