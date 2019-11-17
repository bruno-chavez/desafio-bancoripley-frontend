import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SofaService {

  private sofas = ['2000350638227', '2000366140776P', '2000368973457P', '2000345326467P', '2000345326573P'];

  constructor() {
  }

  getRandomId() {
    return this.sofas[Math.floor(Math.random() * this.sofas.length)];
  }
}
