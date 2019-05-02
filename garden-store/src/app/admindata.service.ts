import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdmindataService {

  constructor(private http: HttpClient) { }

  getProductsAdmin() {
    return this.http.get('https://efa-gardenapp-backend.herokuapp.com/api/product')
  }
}
