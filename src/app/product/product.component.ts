import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id;
  product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe(product => {
        this.product = product;
        console.log(product);
      });
    });
  }
}
