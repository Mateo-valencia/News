import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {

  public noticias: Article[] = [];

  constructor(private storage: Storage) {
    this.GetData();
  }

  SetData( noticia: Article) {

    const existe = this.noticias.find( noti => noti.title === noticia.title );

    if (!existe) {
      this.noticias.unshift( noticia );
      this.storage.set( 'Favoritos', noticia );
    }

  }

  async GetData() {

    const favoritos = await this.storage.get('Favoritos');

    if (favoritos) {
      this.noticias = favoritos;
    }

  }
}
