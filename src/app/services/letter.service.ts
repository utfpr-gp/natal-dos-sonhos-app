import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Letter } from '../types';

@Injectable({
  providedIn: 'root',
})
export class LetterService {
  URL = 'http://localhost:3000/letters';

  CLOUDINARY_NAME = '';
  CLOUDINARY_UPLOAD_PRESET = '';

  CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${this.CLOUDINARY_NAME}/image/upload`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Letter[]>(
      `${this.URL}?_expand=product`,
      this.httpOptions
    );
  }

  save(letter: Letter, imageFile: File, productId: number) {
    letter.productId = productId;
    letter.id = Math.round(Math.random() * 1000);

    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', this.CLOUDINARY_UPLOAD_PRESET);

    this.httpClient
      .post(this.CLOUDINARY_URL, formData)
      .subscribe((res: any) => {
        letter.imageURL = res.secure_url;
      });

    return this.httpClient.post<Letter>(this.URL, letter);
  }
}
