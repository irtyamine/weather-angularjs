import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  location={
    Latitude:-33.886734,
    Longitude:18.5058874
  }

  constructor(private _weatherService:WeatherService) { }

  ngOnInit() {
    this._weatherService.geoFindMe();
    this._weatherService.getWeather(this.location.Longitude,this.location.Latitude).subscribe((response)=>{
      console.log(response);
    })
  }

}
