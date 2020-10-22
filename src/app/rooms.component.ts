import {Component} from '@angular/core'
import { RoomService } from '././room.service';
//import { ProductComponent } from './product.component';
import { RoomComponent } from '././room.component';

@Component({
    selector: 'rooms',
    template: `
    <h2>Rooms</h2>
    <div *ngFor="let room of rooms">
    <room [data]="room"></room>
    </div>
    `,
    providers: [RoomService]
   })

   export class RoomsComponent {
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


    rooms;
     constructor(roomService:RoomService){
        this.rooms=roomService.getRooms();
        //alert(this.rooms);
        console.log("rooms are:",this.rooms)
     }


  }