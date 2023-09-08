import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopulationDataService {
  private apiUrl = 'https://datausa.io/api/data';

  constructor(private httpClient: HttpClient) { }

  getPopulationData(drilldown: PopulationDrillDown): Observable<any> {
    const params = new HttpParams().set('drilldowns', drilldown).set('measures', 'Population');

    return this.httpClient.get(this.apiUrl, { params });
  }
}

export type PopulationDrillDown = 'Nation' | 'State';