import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../shared/gallery/gallery.service';
import {Corner} from '../shared/furniture.model';

@Component({
  selector: 'app-corners',
  templateUrl: './corners.component.html',
  styleUrls: ['./corners.component.css']
})
export class CornersComponent implements OnInit {
  public corners: Corner[];
  public a = this.test()
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.corners = this.galleryService.getCorners();
  }

  test() {
    let r = [];
    for (let i = 0; i < 100; i++) {
      r.push(i);
    }
    return r;
  }
}
