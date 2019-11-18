import { Component } from '@angular/core';
import { DatastorageService } from '../../services/datastorage.service';
import { Article } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public datastorage: DatastorageService) {
  }

}
