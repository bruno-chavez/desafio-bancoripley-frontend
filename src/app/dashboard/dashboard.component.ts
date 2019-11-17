import {Component, OnInit} from '@angular/core';

import {ProductService} from '../services/product.service';
import {SofaService} from '../services/sofa.service';
import {TableService} from '../services/table.service';
import {ShoeService} from '../services/shoe.service';
import {MobileService} from '../services/mobile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sofaImageURL;
  tableImageURL;
  shoeImageURL;
  mobileImageURL;

  constructor(
    private productService: ProductService,
    private sofaService: SofaService,
    private tableService: TableService,
    private shoeService: ShoeService,
    private mobileService: MobileService
  ) {
  }

  ngOnInit() {
    this.setRandomPhotos();
  }

  setRandomPhotos() {
    this.productService.getProduct(this.sofaService.getRandomId()).subscribe(sofa => {
      this.sofaImageURL = 'http:' + sofa.fullImage;
    });

    this.productService.getProduct(this.tableService.getRandomId()).subscribe(table => {
      this.tableImageURL = 'http:' + table.fullImage;
    });

    this.productService.getProduct(this.shoeService.getRandomId()).subscribe(shoe => {
      this.shoeImageURL = 'http:' + shoe.fullImage;
    });

    this.productService.getProduct(this.mobileService.getRandomId()).subscribe(mobile => {
      this.mobileImageURL = 'http:' + mobile.fullImage;
    });
  }
}
