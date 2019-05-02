import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AdmindataService {
  constructor(private http: HttpClient) {}

  getProductsAdmin() {
    return this.http.get(
      "https://efa-gardenapp-backend.herokuapp.com/api/product"
    );
  }

  lightEmUp(productid, token): Observable<any> {
    const httpOptionsDelete = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: token
      })
    };

    return this.http.delete(
      "https://efa-gardenapp-backend.herokuapp.com/api/product/" + productid,
      httpOptionsDelete
    );
  }
}
