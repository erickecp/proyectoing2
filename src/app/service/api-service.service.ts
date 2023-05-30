import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  apiPlatzi = api;

  constructor(
    private http: HttpClient,
  ) { }

  getAllProducts(){
    return this.http.get(`${this.apiPlatzi}products`);
  }

  getProductById(id:number){
    return this.http.get(`${this.apiPlatzi}products/${id}`);
  }
}
