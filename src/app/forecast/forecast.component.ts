import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Forecast } from '../models/forecast.model';

@Component({
  selector: "app-Forecast",
  templateUrl: "./Forecast.component.html",
  styleUrls: ["./Forecast.component.scss"]
})
export class ForecastComponent implements OnInit {
  error: string = '';
  forecast: Forecast;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    
    if (!navigator.geolocation) {
      this.error = 'geolocation not support';
      return;
    }

    this.getForecast(); // making sure that 'this' inside callbacks is the class 'this'.
  }

  getForecast() {
    this.forecast = undefined;
    navigator.geolocation.getCurrentPosition(this.successHandler.bind(this), this.errorHandler.bind(this));
  }

  errorHandler() {
    this.error = 'Unable to get the weather, please accept gps location request.';
  }

  successHandler(position) {
    this.forecast = undefined;
    // 'this' refers to the class now
    this._weatherService.getWeather(position.coords.longitude, position.coords.latitude).then((response) => {
      this.forecast = response;
    }, (error) => {
      //error.statusCode
      this.error = 'Unable to get the weather, service currently unavailable.';
    });
  }
}