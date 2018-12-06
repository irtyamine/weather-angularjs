import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Forecast } from './forecast.model';

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