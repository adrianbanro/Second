import { Component, Input } from '@angular/core'

@Component({
    selector: 'rating22',
    template: `
   
    <i
 class="glyphicon"
 [class.glyphicon-star-empty]="rating < 1"
 [class.glyphicon-star]="rating >= 1"
 (click)="onClick(1)"
 >
 </i>
 {{ rating }}
 {{ numOfReviews }}
    `
   })
   export class Rating22Component{
    @Input() rating = 0;
    @Input() numOfReviews = 55;

    onClick(ratingValue){
        this.rating = ratingValue;
    }
   } 
   