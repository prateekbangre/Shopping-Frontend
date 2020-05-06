export interface ProductModelServer {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  images: string;
}


export interface serverResponse  {
  status: number;
  message: string;
  result: ProductModelServer[]
};
