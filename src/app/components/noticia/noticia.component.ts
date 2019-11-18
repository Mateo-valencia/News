import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { DatastorageService } from 'src/app/services/datastorage.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() i: number;

  constructor(private iab: InAppBrowser,
              private actionSheetController: ActionSheetController,
              private datatorage: DatastorageService
              ) { }

  ngOnInit() {}

  OpenNew() {
    const browser = this.iab.create(this.noticia.url, '_system');
  }

  async LanzarMenu() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [{
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
          this.datatorage.SetData( this.noticia );
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
