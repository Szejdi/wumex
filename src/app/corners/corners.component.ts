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

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.corners = this.galleryService.getCorners();
  }
}
