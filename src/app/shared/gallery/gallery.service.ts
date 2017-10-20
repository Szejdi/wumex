import { Injectable } from '@angular/core';
import {Chair, Corner, Sofa} from '../furniture.model';


@Injectable()
export class GalleryService {
  private corners: Corner[] = [
    new Corner('Narożnik Andre', 'Narożnik Andre.jpg'),
    new Corner('Narożnik Ares', 'Narożnik Ares.jpg'),
    new Corner('Narożnik Aspen', 'Narożnik Aspen.jpg'),
    new Corner('Narożnik Aston', 'Narożnik Aston.jpg'),
    new Corner('Narożnik Caro U', 'Narożnik Caro U.jpg'),
    new Corner('Narożnik Caro', 'Narożnik Caro.jpg'),
    new Corner('Narożnik Denver', 'Narożnik Denver.jpg'),
    new Corner('Narożnik Drive', 'Narożnik Drive.jpg'),
    new Corner('Narożnik Eryk', 'Narożnik Eryk.jpg'),
    new Corner('Narożnik Hades', 'Narożnik Hades.jpg'),
    new Corner('Narożnik Hewlet', 'Narożnik Hewlet.jpg'),
    new Corner('Narożnik Ibiza', 'Narożnik Ibiza.jpg'),
    new Corner('Narożnik Kubuś', 'Narożnik Kubuś.jpg'),
    new Corner('Narożnik Malibu', 'Narożnik Malibu.jpg'),
    new Corner('Narożnik Metro Mini', 'Narożnik Metro Mini.jpg'),
    new Corner('Narożnik Metro U', 'Narożnik Metro U.jpg'),
    new Corner('Narożnik Metro', 'Narożnik Metro.jpg'),
    new Corner('Narożnik Orion', 'Narożnik Orion.jpg'),
    new Corner('Narożnik Palermo', 'Narożnik Palermo.jpg'),
    new Corner('Narożnik Quest', 'Narożnik Quest.jpg'),
    new Corner('Narożnik Santi', 'Narożnik Santi.jpg'),
    new Corner('Narożnik Saverio', 'Narożnik Saverio.jpg'),
    new Corner('Narożnik Stelvio', 'Narożnik Stelvio.jpg'),
    new Corner('Narożnik Tony', 'Narożnik Tony.jpg')
  ];
  private sofas: Sofa[] = [
    new Sofa('Kanapa Alex', 'Kanapa Alex.jpg'),
    new Sofa('Kanapa Andre', 'Kanapa Andre.jpg'),
    new Sofa('Kanapa Hades', 'Kanapa Hades.jpg'),
    new Sofa('Kanapa Helen', 'Kanapa Helen.jpg'),
    new Sofa('Kanapa Hewlet', 'Kanapa Hewlet.jpg'),
    new Sofa('Kanapa Sonia', 'Kanapa Sonia.jpg')
  ];
  private chairs: Chair[] = [new Chair('Fotel Arturo', 'Fotel Arturo.jpg'),
    new Chair('Fotel Grand', 'Fotel Grand.jpg'),
    new Chair('Fotel Heron', 'Fotel Heron.jpg'),
    new Chair('Fotel King', 'Fotel King.jpg'),
    new Chair('Fotel Lord', 'Fotel Lord.jpg'),
    new Chair('Fotel Mondo', 'Fotel Mondo.jpg'),
    new Chair('Fotel Tristan', 'Fotel Tristan.jpg'),
    new Chair('Fotel Valerio', 'Fotel Valerio.jpg')];

  getCorners() {
    return this.corners.slice();
  }

  getCorner(id: number) {
    return this.corners[id];
  }

  getSofas() {
    return this.sofas.slice();
  }

  getSofa(id: number) {
    return this.sofas[id];
  }

  getChairs() {
    return this.chairs.slice();
  }

  getChair(id: number) {
    return this.chairs[id];
  }
}

