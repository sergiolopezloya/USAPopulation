import { Component, OnInit } from '@angular/core';
import { PopulationDataService, PopulationDrillDown } from '../population-data.service';

@Component({
  selector: 'app-population-chart',
  templateUrl: './population-chart.component.html',
  styleUrls: ['./population-chart.component.scss']
})
export class PopulationChartComponent implements OnInit {
  constructor(private populationDataService: PopulationDataService) {}

  ngOnInit(drilldown: PopulationDrillDown = 'Nation'): void {
    this.populationDataService.getPopulationData(drilldown).subscribe((data) => {
      console.log(data);
    });
  }
}
