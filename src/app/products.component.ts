import {Component} from '@angular/core'
import { ProductService } from '././product.service';
//import { ProductComponent } from './product.component';
import { ProductComponent } from '././product.component';

@Component({
    selector: 'products',
    template: `



    <h2>Rooms</h2>
    
    <div class="btn-toolbar">
    <div *ngFor="let product of products">
    
    <button class="btn btn-primary" (click)="onClickMe($event,product.productName)">
    {{product.productName}}
    </button>

    </div>
    </div>
    
    <h2>Room Panel</h2>

    
    <div *ngFor="let product of products">
    <div *ngIf="product.productName==this.activeRoom">
    <product [data]="product"></product>
    </div>
    </div>







    <h2>Products/Rooms</h2>
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
   //productService;
    activeRoom;
    products;
    //products2;
     constructor(productService:ProductService){
        this.products=productService.getProducts();
     }

     onClickMe($event,roomName){
      //console.log("Clicked77",$event)
      //alert(roomName)
      this.activeRoom=roomName;
      //this.products2=this.productService.getProducts();
      }


  }