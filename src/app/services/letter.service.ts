import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Letter } from '../types';

@Injectable({
  providedIn: 'root',
})
export class LetterService {
  URL = 'http://localhost:3000/letters';

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
}
