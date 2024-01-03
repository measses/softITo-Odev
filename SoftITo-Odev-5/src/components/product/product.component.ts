import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  productList: Product[] = [];

  constructor(public productService: ProductService, private cartService:CartService) { }


  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.productService.getAll().subscribe(result => {
      this.productList = result;
    });
  }

  addCart(product: Product){
    this.cartService.addProductInCard(product);
  }

}
