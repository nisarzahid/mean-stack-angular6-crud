import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddunitService {
  uri = 'http://localhost:4000/adunits';

  constructor(private http: HttpClient) {}

  addAdUnit(unit_name, unit_price) {
    const obj = {
      unit_name: unit_name,
      unit_price: unit_price
    };
    return this.http
      .post(`${this.uri}/add`, obj);
  }

  getAdUnits() {
    return this.http.get(`${this.uri}`);
  }

  editAdUnit(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateAdUnit(unit_name, unit_price, id) {
    const obj = {
      unit_name: unit_name,
      unit_price: unit_price
    };
    return this.http
      .post(`${this.uri}/update/${id}`, obj);
  }

  deleteAdUnit(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
