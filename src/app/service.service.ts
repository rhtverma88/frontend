import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 

  constructor(private http: HttpClient) { }

  base_url: string = 'https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI';

  getregistry() {
    return this.http.get(this.base_url);
  }



}
