import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherService } from './services/weather.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
