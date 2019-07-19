import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../domain/trip';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  URL: string = 'http://localhost:8080/trips';

  constructor(private client: HttpClient) { }  // DI

  public getAllTrips(): Observable<Trip[]> {
    return this.client.get<Trip[]>(this.URL);
  }

}
