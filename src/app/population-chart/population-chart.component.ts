import { Component, OnInit } from '@angular/core';
import { PopulationDataService } from '../population-data.service';

@Component({
  selector: 'app-population-chart',
  templateUrl: './population-chart.component.html',
  styleUrls: ['./population-chart.component.scss']
})
export class PopulationChartComponent implements OnInit {
  constructor(private populationDataService: PopulationDataService) {}

  ngOnInit(): void {
    this.populationDataService.getPopulationData('Nation').subscribe((data) => {
      console.log(data);
    });
  }
}
