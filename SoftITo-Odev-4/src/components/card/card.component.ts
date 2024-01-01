import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  cartItems: Product[] = [];
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {

    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }


  addToCart(product: Product) {
    const existingProduct = this.cartItems.find((item) => item.id === product.id);

    if (!existingProduct) {
      this.cartItems.push({ ...product, quantity: 1 });
    } else {
      existingProduct.quantity += 1;
    }
  }
}







