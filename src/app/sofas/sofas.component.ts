import { Component, OnInit } from '@angular/core';
import {Sofa} from '../shared/furniture.model';
import {GalleryService} from '../shared/gallery/gallery.service';

@Component({
  selector: 'app-sofas',
  templateUrl: './sofas.component.html',
  styleUrls: ['./sofas.component.css']
})
export class SofasComponent implements OnInit {
  public sofas: Sofa[];

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.sofas = this.galleryService.getSofas();
  }
}
