import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  // location = {
  //   Latitude: -31.886734,
  //   Longitude: 18.5058874
  // };

  weather:any;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    console.log('this is it hopefully',this._weatherService.location);
    this._weatherService.geoFindMe();
    this._weatherService
      .getWeather(this._weatherService.location.Longitude, this._weatherService.location.Latitude)
      .subscribe(response => {
        console.log(response);
        this.weather=response;
      });
  }

}
