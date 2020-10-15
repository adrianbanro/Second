import {Component} from '@angular/core'
import { ProductService } from '././product.service';
//import { ProductComponent } from './product.component';
import { ProductComponent } from '././product.component';

@Component({
    selector: 'products',
    template: `
    <h2>Products</h2>
    <div *ngFor="let product of products">
    <product [data]="product"></product>
    </div>
    `,
    providers: [ProductService]
   })

   export class ProductsComponent {
      // products = ["Learning React", "Learning Angular", "ASP.NET" ];
       // //<product [data]="product"></product>

/*
@Component({
    selector: 'products',
    template: 
    `<h2>Products</h2>'
    <ul>
    <li *ngFor="let product of products">
{{product}}
 </li> 
 <ul>`


    <div *ngFor="let product of products">
    <product [data]="product"></product>
    </div>

    
   })*/


    products;
     constructor(productService:ProductService){
        this.products=productService.getProducts();
     }


  }