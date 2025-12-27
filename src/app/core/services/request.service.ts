import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Request {
  private baseUrl = `${environment.apiBaseUrl}/requests`;

  constructor(private http:HttpClient){}

  submitRequest(id: number){
    return this.http.post<void>(`${this.baseUrl}/${id}/submit`,{});
  }

  assignRequest(id:number,auditorId:number){
    return this.http.post<void>(`${this.baseUrl}/${id}/assign`,{auditorId})
  }

  approveRequest(id:number){
    return this.http.post<void>(`${this.baseUrl}/${id}/approve`,{})
  }

  rejectRequest(id:number){
    return this.http.post<void>(`${this.baseUrl}/${id}/reject`,{})
  }
}