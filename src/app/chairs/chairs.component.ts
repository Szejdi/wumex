import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../shared/gallery/gallery.service';
import {Chair} from '../shared/furniture.model';

@Component({
  selector: 'app-chairs',
  templateUrl: './chairs.component.html',
  styleUrls: ['./chairs.component.css']
})
export class ChairsComponent implements OnInit {
  public chairs: Chair[];

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.chairs = this.galleryService.getChairs();
  }

}
