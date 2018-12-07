import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Forecast } from '../models/forecast.model';
import { ICON_CLASS_MAP } from './forecast-maps';

@Component({
  selector: 'app-Forecast',
  templateUrl: './Forecast.component.html',
  styleUrls: ['./Forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  currentIconClass: string = 'container__neutral';
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
    this.resetForecast();
    navigator.geolocation.getCurrentPosition(
      this.successHandler.bind(this),
      this.errorHandler.bind(this)
    );
  }

  errorHandler() {
    this.error =
      'Unable to get the weather, please accept gps location request.';
  }

  successHandler(position) {
    this.resetForecast();
    // 'this' refers to the class now
    this._weatherService
      .getWeather(position.coords.longitude, position.coords.latitude)
      .then(
        response => {
          this.forecast = response;

          if (this.forecast.weather && this.forecast.weather.length) {
            this.currentIconClass =
              ICON_CLASS_MAP[this.forecast.weather[0].icon];
          }
        },
        error => {
          //error.statusCode if API fails
          this.error =
            'Unable to get the weather, service currently unavailable.';
        }
      );
  }

  private resetForecast() {
    this.forecast = undefined;
  }
}
