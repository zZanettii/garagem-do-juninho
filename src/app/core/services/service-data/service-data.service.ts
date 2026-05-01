import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OurJobs } from '../../components/our-services/our-services';

@Injectable({
  providedIn: 'root',
})
export class ServiceData {
  private url = 'assets/data/service-data.json';
  private readonly http = inject(HttpClient);

  getOurServices(): Observable<OurJobs[]> {
    return this.http
      .get<{ ourServices: OurJobs[] }>(this.url)
      .pipe(map((response) => response.ourServices));
  }
}
