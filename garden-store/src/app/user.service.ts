import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Admin } from "./models/user.models";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class AdminService {
  private dbUrl = "https://efa-gardenapp-backend.herokuapp.com/api/auth/login";

  constructor(private http: HttpClient) {}

  login(admin: Admin): Observable<any> {
    return this.http.post<any>(this.dbUrl, admin, httpOptions);
  }
}
