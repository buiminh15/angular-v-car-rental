import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ProductService } from '../../services/product.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-live-car-status',
  standalone: true,
  imports: [TableModule, CurrencyPipe, CommonModule],
  templateUrl: './live-car-status.component.html',
  styleUrl: './live-car-status.component.scss'
})
export class LiveCarStatusComponent {
  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
  }
}
