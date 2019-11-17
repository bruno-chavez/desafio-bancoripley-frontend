import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private sofas = ['2000350638227', '2000366140776P', '2000368973457P', '2000345326467P', '2000345326573P'];
  private tables = ['2000371843143P', '2000366073555P', '2000373971424P', '2000366079243P', '2000358418593P'];
  private shoes = ['2000375921601', '2000372389183', '2000375368734', '2000367117227', '314728'];
  private mobiles = ['2000373814165P', '2000376635910P', '2000376582245P', '2000376836164P', '2000374341127P'];


  constructor() {
  }

  getRandomCategoryId(category) {
    if (category === 'sofas') {
      return this.sofas[Math.floor(Math.random() * 5)];
    } else if (category === 'tables') {
      return this.tables[Math.floor(Math.random() * 5)];
    } else if (category === 'shoes') {
      return this.shoes[Math.floor(Math.random() * 5)];
    } else {
      return this.mobiles[Math.floor(Math.random() * 5)];
    }
  }

  getCategoryIds(category) {
    if (category === 'sofas') {
      return this.sofas;
    } else if (category === 'tables') {
      return this.tables;
    } else if (category === 'shoes') {
      return this.shoes;
    } else {
      return this.mobiles;
    }
  }
}
