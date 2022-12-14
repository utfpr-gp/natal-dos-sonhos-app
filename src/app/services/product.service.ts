import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, Observable } from 'rxjs';
import { Product } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  URL = 'http://localhost:3000/products';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  CLOUDINARY_NAME = '';
  CLOUDINARY_UPLOAD_PRESET = '';

  CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${this.CLOUDINARY_NAME}/image/upload`;

  constructor(private httpClient: HttpClient) {}

  save(product: Product, imageFile: File): Observable<Product> {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', this.CLOUDINARY_UPLOAD_PRESET);

    return this.httpClient.post(this.CLOUDINARY_URL, formData).pipe(
      concatMap((res: any) => {
        product.imageURL = res.secure_url;
        return this.httpClient.post<Product>(this.URL, product);
      })
    );
  }
}
