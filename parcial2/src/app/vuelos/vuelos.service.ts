import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Vuelos } from './vuelos';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

private apiUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getVuelos(): Observable<Vuelos[]> {
    return this.http.get<Vuelos[]>(this.apiUrl);
  }

}
