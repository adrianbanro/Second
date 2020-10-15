import { Component } from '@angular/core'
@Component({
    selector: 'rating',
    template: `
    <h2>something</h2>
    <i
    class="glyphicon"
    [class.glyphicon-star-empty]="rating < 1"
    [class.glyphicon-star]="rating >= 1"
    (click)="onClick(1)"
    >
    </i>
    `
   })
export class RatingComponent{
 rating = 0;
 onClick(ratingValue){
 this.rating = ratingValue;
 }
} 