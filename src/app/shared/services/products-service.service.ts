import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getProducts() {
    return this.http.get(environment.baseUrl);
  }
  // tslint:disable-next-line: typedef
  getProduct(idProduct) {
    return this.http.get(environment.baseUrl + `?id=${idProduct}`);
  }

  // tslint:disable-next-line: typedef
  postProduct(newProduct) {
    return this.http.post(environment.baseUrl, newProduct);
  }

  // tslint:disable-next-line: typedef
  updateProduct(id ,product) {
    return this.http.put(`${environment.baseUrl}?id=${id}`, product, {
      responseType: 'json' as const,
      headers: {
        responseType: 'text',
      }
    });
  }
}
