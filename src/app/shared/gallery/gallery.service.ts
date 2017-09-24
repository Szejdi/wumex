import { Injectable } from '@angular/core';
import {Chair, Corner, Sofa} from '../furniture.model';


@Injectable()
export class GalleryService {
  private corners: Corner[] = [new Corner('one_name', 'one.jpg')];
  private sofas: Sofa[];
  private chairs: Chair[];

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
