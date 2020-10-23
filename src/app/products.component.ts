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
    <product (updatedRoomData_Event)="updateRoom($event)" [data]="product"></product>
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
    product;
    //products2;
     constructor(productService:ProductService){
        this.products=productService.getProducts();
     }

     updateRoom(updatedRoomData: any) {

        var constructor2 = (productService:ProductService)=>{
            this.products=productService.getProducts();
         }


        //this.items.push(newItem);
        updatedRoomData: Object;
        //this.products=productService.getProducts();

        console.log("updated Room Data : ",updatedRoomData);
        //this.updatedRoomData_Event.emit(modifiedRoomData);
        //console.log("updated Room Data : ",{updatedRoomData});
        console.log("updated Room Data : ",updatedRoomData.room);

        const updatedData={
            
            productName: updatedRoomData.room,
            rating: updatedRoomData.temperature,
            numOfReviews: updatedRoomData.humidity
        }

        //const updatedRoom=
            var prod;
            var mergedRoom;

            for ( prod in this.products) {
                console.log("products : ",this.products);
                console.log("prod : ",prod);
                console.log("prod.productName : ",prod.productName);
                console.log("prod.rating : ",prod.rating);
                console.log("updatedRoomData.room : ",updatedRoomData.room);
                // text += person[x];
                if (prod.productName==updatedRoomData.room) 
                {
                mergedRoom = {...prod, ...updatedData};
                console.log("mergedRoom : ",mergedRoom);
                }
                else console.log("not working mergedRoom : ");
               }


        /*this.products= {
            room: updatedRoomData.room,
            temperature: updatedRoomData.temperature,
            humidity: event.value

            imageUrl: "http://loremflickr.com/150/150?random=1",
            productName: "Product 1",
            releasedDate: "May 31, 2016",
            description: "Cras sit amet nibh libero, in gravida... ",
            rating: 4,
            numOfReviews: 2

          };*/
      }



     onClickMe($event,roomName){
      //console.log("Clicked77",$event)
      //alert(roomName)
      this.activeRoom=roomName;
      //this.products2=this.productService.getProducts();
      }


  }