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
 <img class="media-object" src="{{ data.imageUrl }}">
 </a>
 <br>
 </div>
 <div class="media-body">
<div class="media-body">
 <h4 class="media-heading">
 {{ data.productName }}
 </h4>
 <br>
 <h4 class="media-heading">
 {{ data.description }}
 </h4>
 <br>
 {{ data.releasedDate }}
 <br>
 <rating22
[rating]="data.rating"
[numOfReviews]="data.numOfReviews">
 </rating22>

<br>

<div *ngIf="show==1">
 <slider   (modifiedRoomData_Event)="modifyRoom($event)"
 [room]="data.productName"
 [temperature]="data.rating"
 [humidity]="data.numOfReviews">
  </slider>
  </div>



  <div *ngIf="show==1">
  <mat-slide-toggle [(ngModel)]="toggled" (change)="onChange($event)">Parameters Saved</mat-slide-toggle>
  <div>{{toggled}} toggle_button </div>
  </div>


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