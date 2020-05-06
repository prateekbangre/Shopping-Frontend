import { ProductModelServer, serverResponse } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: ProductModelServer[] = [];

  constructor(private productService: ProductService,
    private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((prods : serverResponse) => {
      this.products = prods.result;
      console.log(this.products);
    });
  }

  selectProduct(id: Number){
    this.router.navigate(['/product', id]).then();
  }

  AddProduct(id: Number){
    this.cartService.AddProductToCart(id);
  }

}
