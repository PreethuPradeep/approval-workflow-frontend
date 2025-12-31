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

  openRequest(id:number){
    return this.http.post<void>(`${this.baseUrl}/${id}/open`,{})
  }

  approveRequest(id:number){
    return this.http.post<void>(`${this.baseUrl}/${id}/approve`,{})
  }

  rejectRequest(id:number){
    return this.http.post<void>(`${this.baseUrl}/${id}/reject`,{})
  }

  escalateRequest(id:number, reason:string){
    return this.http.post<void>(`${this.baseUrl}/${id}/escalate`,{})
  }

  closeRequest(id:number){
    return this.http.post<void>(`${this.baseUrl}/${id}/close`,{})
  }

  deactivateRequest(id:number, reason:string){
    return this.http.post<void>(`${this.baseUrl}/${id}/deactivate`,{reason})
  }

  redressalCreated(id:number, payload: string){
    return this.http.post<void>(`${this.baseUrl}/${id}/redressal-created`,{})
  }

  redressalClosed(id:number, reason: string){
    return this.http.post<void>(`${this.baseUrl}/${id}/redressal-closed`,{reason})
  }

}