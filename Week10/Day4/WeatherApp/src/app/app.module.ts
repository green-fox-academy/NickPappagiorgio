import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TileComponent } from './tile/tile.component';
import { ForecastComponent } from './forecast/forecast.component';
import { AppRoutingModule } from './/app-routing.module';
import { CityService } from './city.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TileComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
