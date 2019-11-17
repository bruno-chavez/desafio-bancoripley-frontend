import {Component, OnInit} from '@angular/core';

import {ProductService} from '../services/product.service';
import {CategoryService} from '../services/category.service';

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
    private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.setRandomPhotos();
  }

  setRandomPhotos() {
    this.productService.getProduct(this.categoryService.getRandomCategoryId('sofas')).subscribe(sofa => {
      this.sofaImageURL = 'http:' + sofa.fullImage;
    });

    this.productService.getProduct(this.categoryService.getRandomCategoryId('tables')).subscribe(table => {
      this.tableImageURL = 'http:' + table.fullImage;
    });

    this.productService.getProduct(this.categoryService.getRandomCategoryId('shoes')).subscribe(shoe => {
      this.shoeImageURL = 'http:' + shoe.fullImage;
    });

    this.productService.getProduct(this.categoryService.getRandomCategoryId('mobiles')).subscribe(mobile => {
      this.mobileImageURL = 'http:' + mobile.fullImage;
    });
  }
}
