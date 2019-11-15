import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { RespuestaTopHeadLines } from '../../interfaces/interfaces';

const Keyapi = environment.KeyApi;
const Urlapi = environment.UrlApi;

const headers = new HttpHeaders({
  'X-Api-key': Keyapi
});

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  Page = 0;
  PageActual = 0;
  CategoryActual = '';

  constructor( private http: HttpClient) { }

  private construirURL<T>( query: string) {
    query = Urlapi + query;
    return this.http.get<T>( query , { headers });
  }

  getTopHeadLines() {
    this.Page++;
    return this.construirURL<RespuestaTopHeadLines>( `/top-headlines?country=us&page=${ this.Page }` );
  }

  getTopHeadLinesCategory(Category: string) {
    if (Category === this.CategoryActual) {
      this.PageActual++;
    } else {
      this.PageActual = 1;
      this.CategoryActual = Category;
    }
    return this.construirURL<RespuestaTopHeadLines>( `/top-headlines?country=us&category=${ Category }&page=${ this.PageActual }`);
  }

}
