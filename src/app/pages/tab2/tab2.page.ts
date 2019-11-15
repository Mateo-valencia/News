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

  constructor(private serviceApi: ServiceApiService) {
  }

  ngOnInit() {
      this.ChargeNews(this.category[0]);
  }

  ChargeNews( Category: string) {
    this.value = Category;
    this.serviceApi.getTopHeadLinesCategory(Category)
    .subscribe(
      resp => {
        this.news.push(...resp.articles);
      });
  }

  ChangeCategory( event ) {
    this.news = [];
    this.ChargeNews( event.detail.value);
  }
}
