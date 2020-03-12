import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipo } from '../models/ipo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class IpoService {
  httpUrl = environment.host + 'initial-public-offering-service/ipo/';
  constructor(private httpClient:HttpClient) { }
  getAllIpo(): Observable<Ipo[]> {
    return this.httpClient.get<Ipo[]>(this.httpUrl);
  }
  saveIpo(ipo: Ipo): Observable<Ipo> {
    return this.httpClient.post<Ipo>(this.httpUrl, ipo);
  }
  deleteIpo(id: number): Observable<Ipo> {
    return this.httpClient.delete<Ipo>(this.httpUrl + id);
  }
  updateIpoInfo(ipo: Ipo): Observable<Ipo> {
    return this.httpClient.put<Ipo>(this.httpUrl, ipo);
  }
  getIpoById(id: number): Observable<Ipo> {
    return this.httpClient.get<Ipo>(this.httpUrl + id);
  }

  
}
