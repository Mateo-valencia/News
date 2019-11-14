import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor( private http: HttpClient) { }

  getTopHeadLines() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=db017c8e8de84f2c91f19df0a0b3f1b6');
  }
}
