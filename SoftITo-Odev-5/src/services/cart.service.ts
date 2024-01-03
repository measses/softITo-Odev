import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Card } from '../models/card';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private selectedUser!: User;
  private cartList:Card[] = [];
  constructor() { }

  getSelectedUser(): User {
    return this.selectedUser;
  }

  setSelectedUser(user: User) {
    this.selectedUser = user;
    let cart = this.cartList.find(card => card.userId == user.id);
    if (this.getUserCard()==undefined){
      this.cartList.push({userId:user.id, id:this.cartList.length+1, items:[]});
    }
  }

  getUserCard(): Card|undefined{
    return this.cartList.find(card => card.userId == this.selectedUser.id)
  }

  addProductInCard(product:Product){
    let cart =this.getUserCard();
    if(cart==undefined) return;
    let cartItem = cart.items.find(item=> item.userId == product.id)
    if(cart.items.find(item => item.productId == product.id)!==undefined){
    cart.items.push({
      cardId: cart.id,
      productId: product.id,
      count:0
    });
    cart.items.push(cartItem)
   }

  }
}
