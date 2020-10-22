import {Component, Input} from '@angular/core';
//import {SliderFormattingExample} from './slider.component';
//import { SliderFormattingExample } from '././slider.component';
import { SliderFormattingExample} from './slider.component';

@Component({
 selector: 'room',
 template: `
 <div class="media">
 <div class="media-left">
 <a href="#">
 <img class="media-object" src="{{ data.imageUrl }}">
 </a>
 </div>
 <div class="media-body">
<div class="media-body">
 <h4 class="media-heading">
 {{ data.roomName }}
 </h4>
 {{ data.releasedDate }}





 <br>
 {{ data.description }}
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
export class RoomComponent {
 @Input() data;
 /*
  <slider
[temperature]="data.temperature"
[humidity]="data.humidity">
 </slider>

 <rating22
[rating]="data.temperature"
[numOfReviews]="data.humidity">
 </rating22>

 */
} 