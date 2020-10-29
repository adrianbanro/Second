import {Component, Input} from '@angular/core';
import { Rating22Component } from './rating22.component';
import { SliderFormattingExample} from './slider.component';
import { Output, EventEmitter } from '@angular/core';



@Component({
 selector: 'product',
 template: `
 <div *ngIf="this.showProduct==1">
 <div class="media">
 <div class="media-left">
 <a href="#">
 </a>
 <br>
 </div>

 <div class="container">
 <div class="row" style="well well-sm">
   <div class="col"   >
   <img class="media-object" src="{{ data.imageUrl }}">
   </div>
   <div class="col" style="border-radius: 5px; background: #73AD21">
   <h4 class="media-heading">
   {{ data.productName }}
   </h4>
   <rating22
   [rating]="data.rating"
   [numOfReviews]="data.numOfReviews">
    </rating22>
   </div>

 </div>

 <div class="row">
 <div class="col">
 <h4 class="media-heading">
 
 </h4>

 <h4 class="media-heading">
 {{ data.description }}
 </h4>
 </div>
 </div>


 <div class="row">
 
   <div class="col">

   </div>
   <div class="col" style="border-radius: 5px; background: #ccff99">
   <div *ngIf="show==1">
   <slider   (modifiedRoomData_Event)="modifyRoom($event)"
   [room]="data.productName"
   [temperature]="data.rating"
   [humidity]="data.numOfReviews">
    </slider>
    </div>
   </div>
   <div class="col">
   <div *ngIf="show==1">
   <mat-slide-toggle [(ngModel)]="toggled" (change)="onChange($event)" style="height:30%; position:absolute; bottom:10px;">Saved</mat-slide-toggle>
   <div>{{toggled}}</div>
   </div>
 </div>

 </div>
</div>














 
 


 <div class="media-body">
<div class="media-body">







 


</div>
 </div>
 </div>
 </div>




 `,
 styles: [`
 .media {
 margin-bottom: 20px;
 }
 `]
})
export class ProductComponent {
 @Input() data;
 @Input() show;

 @Output() updatedRoomData_Event = new EventEmitter<object>();

 isValid = false;
 toggled;
 showProduct=1;

 constructor(){
  console.log("555 show",this.show);
  //console.log("555 show",this.visibility);
  //console.log("555 visibilityw",visibility);
  //<img class="media-object" src="src/app/Room_Images/IMG_20201026_120629.jpg">
  // {{ data.releasedDate }}
}



onChange($event: any) {
  console.log("Event: ",$event);
  console.log("toggled: ",this.toggled);
  this.showProduct=(this.toggled==true,1,0);
}

 modifyRoom(modifiedRoomData: object) {
    //this.items.push(newItem);
    console.log("modified Room Data: ",modifiedRoomData);
    this.updatedRoomData_Event.emit(modifiedRoomData);
  }
 


//import {MatSlideToggleModule} from '@angular/material/slide-toggle';

 /*
 <div class="media">
 <div class="media-left">
 <a href="#">
 <img class="media-object" src="{{ data.imageUrl }}">
 </a>
 </div>
 <div class="media-body">
<div class="media-body">
 <h4 class="media-heading">
 {{ data.productName }}
 </h4>
 {{ data.releasedDate }}
 <rating22
[rating-value]="data.rating"
[numOfReviews]="data.numOfReviews">
 </rating22>
 <br>
 {{ data.description }}
</div>
 </div>
 </div>

  <!--
show:
{{show}}
  -->

 */


} 