import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CurrentWeather } from './current-weather';
import {WeatherService} from './weather.service';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

const appRouters=[
  {
    path:'',component: HomeComponent
  },
  {
    path:'home',component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrentWeather
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRouters),
    
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
