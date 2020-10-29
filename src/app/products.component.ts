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
    
    <button class="btn btn-primary mat-raised-button" (click)="onClickMe($event,product.productName)">
    {{product.productName}}
    </button>
  
    </div>
    </div>

    <mat-grid-list cols="3" rowHeight="550px">
    <mat-grid-tile *ngFor="let product of products" >
      <mat-card class="dashboard-card">
        <mat-card-header>
          <mat-card-title>
            {{product.productName}}
            <button mat-icon-button class="more-button" [matMenuTriggerFor]="menu" aria-label="Toggle menu">
              <mat-icon>more_vert</mat-icon>
            </button>
            <mat-menu #menu="matMenu" xPosition="before">
              <button mat-menu-item (click)="onClickMe($event,product.productName)">Modify Climat</button>
              <button mat-menu-item>Freeze Climat</button>
            </mat-menu>
          </mat-card-title>
        </mat-card-header>
        <mat-card-content class="dashboard-card-content">
          <div>Room data</div>
          <product [show]="dashboardVisibility" [data]="product"></product>
        </mat-card-content>
      </mat-card>
    </mat-grid-tile>
  </mat-grid-list>



    
    <h2>Active Room Panel</h2>

    
    <div *ngFor="let product of products">
    <div *ngIf="product.productName==this.activeRoom">
    <product (updatedRoomData_Event)="updateRoom($event)" [show]="detailVisibility" [data]="product"></product>
    </div>
    </div>


















  <!--
    <h2>Products/Rooms</h2>
    <div *ngFor="let product of products">
    <product [data]="product"></product>
    </div>
    -->
    `,
    providers: [ProductService]
   })

   export class ProductsComponent {
      
      // products = ["Learning React", "Learning Angular", "ASP.NET" ];
       // //<product [data]="product"></product>
       //[colspan]="card.cols" [rowspan]="card.rows"

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
   //visibility;
   detailVisibility;
   dashboardVisibility;
    activeRoom;
    products;
    product;
    //products2;
     constructor(productService:ProductService){
        this.products=productService.getProducts();
        this.detailVisibility=1;
        this.dashboardVisibility=0;
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
/*
            
            const qwert888=this.products[0].productName;
            console.log("qwert888 : ",qwert888);

            let prod1=this.products[0];

            mergedRoom = {...prod1, ...updatedData};
            console.log("mergedRoom : ",mergedRoom);

      

            this.products.filter(function(){ 
                
            
                console.log("444 prod : ",prod1.productName);
                console.log("444 updatedRoomData.room : ",updatedRoomData.room);
                return prod1.productName!=updatedRoomData.room;

                 
             });
             console.log("trimmed products",this.products); // [ 1, 2, 3, 4, 5 ] 


            let arr2 = [mergedRoom];
            this.products = [...this.products,...arr2]; 
            console.log("new products",this.products); // [ 1, 2, 3, 4, 5 ] 



            if (prod1.productName==updatedRoomData.room) 
            {
            mergedRoom = {...prod1, ...updatedData};
            console.log("mergedRoom : ",mergedRoom);
            }
            else console.log("not working mergedRoom : ");
*/

            for ( prod of this.products) {
                console.log("products : ",this.products);
                console.log("99999 prod : ",prod);

                //console.log("prod222 : ",{prod}.);
                //const smth;
                //const {prod}= smth;
                //console.log("smth : ",smth);

                const qwert=prod.productName;
                console.log(" qwert : ", qwert);
                var x =JSON.parse(JSON.stringify(prod));
                console.log(" x : ", x.productName);
                console.log("prod.productName : ",prod.imageUrl);

                console.log("prod.productName : ",prod.productName);
                console.log("prod.rating : ",prod.rating);
                console.log("updatedRoomData.room : ",updatedRoomData.room);

                // text += person[x];
                if (prod.productName==updatedRoomData.room) 
                {

                    mergedRoom = {...prod, ...updatedData};
                    console.log("mergedRoom : ",mergedRoom);

                    let index = this.products.indexOf(prod) // 1

                    //now use splice() method
                    let result = this.products.splice(index, 1); // ['mango']

                    //let trimmedproducts = this.products.splice(prod.productName);
                    //this.products = this.products.filter(item => item !== prod.productName)
                    //this.products = this.products.filter(prod.productName)
                    console.log("656565 trimmed products",this.products); // [ 1, 2, 3, 4, 5 ] 
                    //console.log("99 656565 trimmed products",trimmedproducts); // [ 1, 2, 3, 4, 5 ] 

                    let arr2 = [mergedRoom];
                    this.products = [...this.products,...arr2]; 
                    console.log("new products",this.products); // [ 1, 2, 3, 4, 5 ] 
                    console.log("88 rebuilt products",this.products);

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