import {ProductModelServer} from "./product.model";

export interface CartModelServer {
  total: number;
  data: [{
    product: ProductModelServer,
    numInCart: Number
  }];
}

export interface CartModelPublic {
  total: number;
  prodData: [{
    id: Number,
    incart: Number
  }]
}
