import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OurJobs } from '../../components/our-services/our-services';
import { AfterBeforeItem } from '../../components/after-and-before/after-and-before';

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

  getAfterBeforeItems(): Observable<AfterBeforeItem[]> {
    return this.http
      .get<{ afterBeforeItems: AfterBeforeItem[] }>(this.url)
      .pipe(map((response) => response.afterBeforeItems));
  }

}
