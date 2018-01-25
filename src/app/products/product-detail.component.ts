import { IProduct } from './product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './product-detail.component.html'})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: String;
  imageWidth: number = 100;
  imageMargin:number = 50;
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) { }

  ngOnInit() {
    let id= +this._route.snapshot.paramMap.get('id');/// "+" converts the string to a numeric id 
    this.pageTitle += `: ${id}`;  
    this._productService.getProduct(id)
    .subscribe(product => {
        this.product = product;
    },
        error => this.errorMessage = <any>error);
      }

  onBack():void{
    this._router.navigate(['/products']);
  }

}
