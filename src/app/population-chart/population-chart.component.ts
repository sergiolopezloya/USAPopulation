import { Component, OnInit } from '@angular/core';
import { PopulationDataService, PopulationDrillDown } from '../population-data.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-population-chart',
  templateUrl: './population-chart.component.html',
  styleUrls: ['./population-chart.component.scss']
})
export class PopulationChartComponent implements OnInit {
  constructor(private populationDataService: PopulationDataService) {}

  ngOnInit(drilldown: PopulationDrillDown = 'Nation', from: number = 2015, to: number = 2022): void {
    this.populationDataService.getPopulationData(drilldown).subscribe((data) => {
      const populationData = data?.data
        ?.map((d: any) => {
          return {
            year: d['ID Year'],
            population: d['Population'],
          }
        })
        ?.filter((d: any) => d.year >= from && d.year <= to)
        ?.reverse() || [];
      const chartOptions: Highcharts.Options = {
        chart: {
          type: 'line',
        },
        title: {
          text: `USA Population Data (${from}-${to})`,
        },
        xAxis: {
          categories: populationData.map((data: any) => data.year),
          title: {
            text: 'Year',
          },
        },
        yAxis: {
          title: {
            text: 'Population',
          },
        },
        series: [
          {
            name: 'Population',
            type: 'line',
            data: populationData.map((data: { population: any; }) => data.population),
          },
        ],
      };
      Highcharts.chart('chart-container', chartOptions);
    });
  }
}
