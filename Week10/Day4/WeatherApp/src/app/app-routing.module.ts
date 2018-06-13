import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TileComponent } from './tile/tile.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TileComponent },
  { path: 'forecast/:city', component: ForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
