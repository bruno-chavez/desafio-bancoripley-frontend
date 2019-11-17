import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  private mobiles = ['2000373814165P', '2000376635910P', '2000376582245P', '2000376836164P', '2000374341127P'];

  constructor() {
  }

  getRandomId() {
    return this.mobiles[Math.floor(Math.random() * this.mobiles.length)];
  }
}
