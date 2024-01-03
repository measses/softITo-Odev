export interface Card{
  id:number;
  userId:number;
  items:CardItem[];

}

export interface CardItem{
  cardId:number;
  productId:number;
  count:number;

}
