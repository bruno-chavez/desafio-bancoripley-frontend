import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ProductService} from '../services/product.service';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category;
  categoryIds;
  products = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService) {
  }

  ngOnInit() {
    const self = this;

    // fetches category from url
    this.route.params.subscribe(params => {
      this.category = params.category;
      this.categoryIds = this.categoryService.getCategoryIds(this.category);
      this.categoryIds.forEach(id => {
        this.productService.getProduct(id).subscribe(product => {
          self.products.push(product);
        });
      });
    });
  }
}
