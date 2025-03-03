import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Event {
  type: string;
  properties: { property: string; type: string }[];
}

export interface EventResponse {
  events: Event[];
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private apiUrl = 'https://br-fe-assignment.github.io/customer-events/events.json';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventResponse> {
    return this.http.get<EventResponse>(this.apiUrl);
  }
}
