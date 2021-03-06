import { IProduct } from './product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
 
    pageTitle: string = 'Product List!';
    imageWidth: number = 100;
    imageMargin:number = 4;
    showImage: boolean = true;
    errorMessage: string;
    
    _listFilter: string;

    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    onRatingClicked(message: string):void{
        this.pageTitle= 'Product List: ' + message;
    }

    filteredProducts : IProduct[];
    products: IProduct[];

    constructor(private _productService: ProductService){

    }

    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

     ngOnInit():void{
        this._productService.getProducts()
        .subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products;
        },
            error => this.errorMessage = <any>error);
}
    
}