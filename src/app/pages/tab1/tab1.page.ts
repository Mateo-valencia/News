import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../../services/service-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor( private serviceApi: ServiceApiService) {}

  ngOnInit() {
    this.serviceApi.getTopHeadLines()
    .subscribe( resp => {
        console.log(resp);
      });
  }
}
