import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {
  noticias1: Article[] = [];

  constructor(private storage: Storage) {
    this.GetData();
  }

  SetData( noticia: Article) {

    //const existe = this.noticias.find( noti => noti.title === noticia.title );
    console.log(this.noticias1);
    //if (!existe) {
      this.noticias1.unshift( noticia );
      this.storage.set( 'Favoritos', noticia );
    //}

  }

  async GetData() {

    const favoritos = await this.storage.get('Favoritos');

    this.noticias = favoritos;

  }
}
