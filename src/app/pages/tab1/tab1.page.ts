import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../../services/service-api.service';
import { Article } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  Articulos: Article[] = [];

  constructor( private serviceApi: ServiceApiService) {}

  ngOnInit() {
    this.CargarInfo();
  }

  loadData( event ) {
    console.log( event );
    this.CargarInfo( event );
  }

  CargarInfo( event? ) {
    this.serviceApi.getTopHeadLines()
    .subscribe( resp => {

      if (resp.articles.length === 0) {
        event.target.disabled = true;
        event.target.complete();
        return;
      }

      console.log('noticias', resp);
      this.Articulos.push(...resp.articles);
// event.target.compelte es para quitar el cargando para copletar la carga de articulo pero aun nos falta cerrar el inifni scroll
      if ( event) {
        event.target.complete();
      }

      });
  }
}
