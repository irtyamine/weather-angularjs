import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import {WeatherService} from './weather.service';
import {RouterModule} from '@angular/router';

const appRoutes=[
  {
    path:'/',component: HomeComponent
  },
  {
    path:'/setting', component: SettingComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    routerModule.forRoot(appRouters)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
