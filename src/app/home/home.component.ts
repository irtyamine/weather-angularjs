import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  location;

  weather: any;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    if (!navigator.geolocation) {
      console.log("<p>Geolocation is not supported by your browser</p>");
      return;
    }

    const success = pos => {
      this.location = pos.coords;
      let lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      this._weatherService.getWeather(lon, lat).subscribe(response => {
        this.weather = response;
        console.log(
          "this is the silly thing i was trying to do ",
          this.weather.weather[0].description
        );
      });
    };
    function error() {
      console.log("Unable to retrieve your location");
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
