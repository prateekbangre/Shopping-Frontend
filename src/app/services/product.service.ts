import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModelServer, serverResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  // get all the product from backend server
  getAllProduct(numberOfResults=10) : Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + '/products',{
      params: {
        limit: numberOfResults.toString()
      }
    })
  }

  // get single product by id from backend server
getSingleProduct(id: Number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.url + '/products/' + id);
  }

  // get all the product by Category name from backend server
  getProductsFromCategory(catName: String): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.url + '/products/category/' + catName);
  }
}
