import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  // location = {
  //   Latitude: this.,
  //   Longitude: 18.5058874
  // };

  weather:any;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    this._weatherService.geoFindMe();
    this._weatherService
      .getWeather(this._weatherService.lng, this._weatherService.lat)
      .subscribe(response => {
        console.log(response);
        this.weather=response;
      });
  }

}
