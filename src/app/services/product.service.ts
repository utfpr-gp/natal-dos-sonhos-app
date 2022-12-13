import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Letter, Product } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  URL = 'http://localhost:3000/products';

  CLOUDINARY_NAME = '';
  CLOUDINARY_UPLOAD_PRESET = '';

  CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${this.CLOUDINARY_NAME}/image/upload`;

  constructor(private httpClient: HttpClient) {}

  save(product: Product, imageFile: File) {
    product.id = Math.round(Math.random() * 1000);
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', this.CLOUDINARY_UPLOAD_PRESET);

    this.httpClient
      .post(this.CLOUDINARY_URL, formData)
      .subscribe((res: any) => {
        product.imageURL = res.secure_url;
      });

    return this.httpClient.post<Product>(this.URL, product);
  }
}
