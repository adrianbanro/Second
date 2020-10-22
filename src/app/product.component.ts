import {Component, Input} from '@angular/core';
import { Rating22Component } from './rating22.component';
import { SliderFormattingExample} from './slider.component';

@Component({
 selector: 'product',
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
 {{ data.productName }}
 </h4>
 {{ data.releasedDate }}

 <rating22
[rating]="data.rating"
[numOfReviews]="data.numOfReviews">
 </rating22>

<br>

 <slider
 [temperature]="data.rating"
 [humidity]="data.numOfReviews">
  </slider>

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
export class ProductComponent {
 @Input() data;
 
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
 */
} 