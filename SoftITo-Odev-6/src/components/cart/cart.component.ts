import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Cart, CartItem } from '../../models/cart';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent{
  selectUser:User|undefined;
  constructor(public cartService:CartService) {
    this.cartService.getSelectedUser();

  }




  }









