import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private  httpClient: HttpClient) {
  }

  getProduct(id): any {
    return this.httpClient.get(`http://desafio-ripley-alb-720130574.us-east-2.elb.amazonaws.com/part_number/${id}`,
      {withCredentials: true});
  }
}
