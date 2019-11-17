import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {

  private shoes = ['2000375921601', '2000372389183', '2000375368734', '2000367117227', '314728'];

  constructor() {
  }

  getRandomId() {
    return this.shoes[Math.floor(Math.random() * this.shoes.length)];
  }
}
