import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopulationChartComponent } from './population-chart/population-chart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'population', component: PopulationChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
