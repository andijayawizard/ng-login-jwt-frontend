import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pasien } from '../models/pasien.model';

const baseUrl = 'http://localhost:8080/api/pasiens';

@Injectable({
  providedIn: 'root'
})
export class PasienService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pasien[]> {
    return this.http.get<Pasien[]>(baseUrl);
  }

  get(id: any): Observable<Pasien> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Pasien[]> {
    return this.http.get<Pasien[]>(`${baseUrl}?title=${title}`);
  }
}
