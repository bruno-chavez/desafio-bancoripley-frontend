import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private tables = ['2000371843143P', '2000366073555P', '2000373971424P', '2000366079243P', '2000358418593P'];

  constructor() {
  }

  getRandomId() {
    return this.tables[Math.floor(Math.random() * this.tables.length)];
  }
}
