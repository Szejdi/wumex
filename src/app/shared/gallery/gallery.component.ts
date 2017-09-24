import {Component, Input, OnInit} from '@angular/core';
import { Lightbox } from 'angular2-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() items;
  constructor(private _lightbox: Lightbox) {}
  ngOnInit() {
  }

  open(index: number): void {
    // open lightbox

    console.log('open image', index);
    const item = this.items[index];
    console.log(item);
    const album = [{src: item.image, caption: item.name, thumb: item.image}];
    this._lightbox.open(album, index);
  }

}
