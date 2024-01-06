import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Cart, CartItem } from '../models/cart';
import { Product } from '../models/product';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private selectedUser!:User
  private cartList:Cart[]=[]
  constructor(){
  }

  getSelectedUser():User|undefined{
    return this.selectedUser;
  }
  setSelectedUser(user:User){
    this.selectedUser=user;
    if(this.getUserCart()==undefined){
      this.cartList.push({userId:user.id,id:this.cartList.length+1,items:[]})
    }

    Swal.fire({
      position: "top-end",
      title: 'Selected User',
      text: user.fullName+' is selected for shop',
      showConfirmButton:false,
      timer:1500
    })
  }
  getUserCart():Cart|undefined{
    return this.cartList.find(cart=>cart.userId==this.selectedUser.id)
  }


  addProductInCart(product:Product){
    let cart=this.getUserCart();
    if(cart==undefined){
      Swal.fire({
        position: "top-end",
        title: 'Uups',
        text: 'Please select user.',
        icon:'error',
        showConfirmButton:false,
        timer:1500
      })
      return;
    }
    let cartItem=cart.items.find(item=>item.productId==product.id);
    if(cartItem==undefined){
      cartItem={
        cartId:cart.id,
        productId:product.id,
        count:0,
        productName:product.name,
        productPrice:product.price
      };
      cart.items.push(cartItem)
    }
    cartItem.count++;
    Swal.fire({
      position: "top-end",
      title: 'Added product',
      text: product.name+' added in cart',
      showConfirmButton:false,
      timer:1500
    })
    // this.notifierService.notify('Added product',product.name+' added in cart');
  }

  incrementQuantity(item: CartItem) {
    item.count += 1;


  }

  decrementQuantity(item: CartItem) {
    if (item.count > 1) {
      item.count -= 1;

    }


  }

  removeQuantity(item: CartItem){
    if(item.count>1){
      item.count-=1;
    }
  }

  getTotalPrice(): number {
      return this.getUserCart()?.items?.reduce((total, item) => total + item.productPrice * item.count, 0) ?? 0;
    }
}
