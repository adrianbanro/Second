import { Component } from '@angular/core';
import { ProductService } from '././product.service';
import { RatingComponent } from './rating.component';
import { Rating22Component } from './rating22.component';
import { UserFormComponent } from './user-form.component';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<h2>{{title}}</h2>
  <img src="{{imageUrl}}" />
  <button
class="btn btn-primary"
[class.disabled]="!isValid">Submit</button>

<button (click)="onClickMe($event)">Submit</button>

<user-form></user-form>


<rating></rating>
<rating22></rating22>

  <products></products>` ,
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'Second997';
  isValid = !false;
  imageUrl = " https://www.w3schools.com/html/pic_mountain.jpg";

  onClickMe($event){
    console.log("Clicked77",$event)
    }
}
