import { Component, ViewChild, OnInit } from '@angular/core';
import { ServiceApiService } from '../../services/service-api.service';
import { Article } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  value: string;
  category = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  news: Article[] = [];
  CategryActual = '';

  constructor(private serviceApi: ServiceApiService) {
  }

  ngOnInit() {
      this.ChargeNews(this.category[0]);
      this.CategryActual = this.category[0];
  }

  ChargeNews( Category: string, event?) {
    this.value = Category;
    this.serviceApi.getTopHeadLinesCategory(Category)
    .subscribe(
      resp => {

        if (resp.articles.length === 0) {
          event.target.disabled = true;
          event.target.complete();
          return;
        }

        this.news.push(...resp.articles);

        if (event) {
          event.target.complete();
        }

      });
  }

  ChangeCategory( event ) {
    this.news = [];
    this.CategryActual = event.detail.value;
    this.ChargeNews( event.detail.value);
  }

  loadData( event ) {
    this.ChargeNews( this.CategryActual, event);
  }
}
