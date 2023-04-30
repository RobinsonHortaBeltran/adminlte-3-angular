import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Observable               } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ClientServicesService {

  url:string = 'http://127.0.0.1:8000/api/';

  constructor(private http:HttpClient) { }

  onNewClient(form:any):Observable<any>{
    let direccion = this.url + 'clients/';
    return this.http.post<any>(direccion,form);
  }
}
