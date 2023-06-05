import { Component, Input } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any[] = [];

  constructor(private platziApiService: ApiServiceService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.platziApiService.getAllProducts()
      .subscribe((data: any) => {
        this.products = data;
      });
  }
}
