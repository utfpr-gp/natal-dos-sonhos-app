import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classroom } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ClassroomService {
  URL = 'http://localhost:3000/classrooms';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Classroom[]>(this.URL, this.httpOptions);
  }

  getById(id: number) {
    return this.httpClient.get<Classroom>(
      `${this.URL}/${id}`,
      this.httpOptions
    );
  }

  getByName(name: string) {
    return this.httpClient.get<Classroom>(this.URL, { params: { name } });
  }
}
