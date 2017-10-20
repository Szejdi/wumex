import {Component, Input, OnInit} from '@angular/core';
import { Lightbox, LightboxConfig } from 'angular2-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() items;
  album = [];

  constructor(private _lightboxConfig: LightboxConfig, private _lightbox: Lightbox) {
  }

  ngOnInit() {
    this.items.forEach(item => {
      this.album.push({src: item.image, caption: item.name, thumb: item.image});
    });
  }

  open(index: number): void {
    // open lightbox
    const item = this.items[index];
    this._lightbox.open(this.album, index);
  }

  paginateItems(pagination) {
    const paginatedItems = [];
    this.items.forEach((item, index) => {
      if (index / pagination >= paginatedItems.length) {
        paginatedItems.push([]);
      }
      paginatedItems[Math.floor(index / pagination)].push(item);
    });
    return paginatedItems;
  }

}
