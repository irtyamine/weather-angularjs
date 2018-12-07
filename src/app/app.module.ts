import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

/* Components*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ForecastComponent } from './forecast/forecast.component';

import { WeatherService } from './services/weather.service';

import { ToCelcius } from './directives/celcius.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForecastComponent,
    ToCelcius
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
