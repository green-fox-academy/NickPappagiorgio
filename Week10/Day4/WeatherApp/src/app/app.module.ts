import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { ForecastComponent } from './forecast/forecast.component';
import { AppRoutingModule } from './/app-routing.module';
import { CityService } from './city.service';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
