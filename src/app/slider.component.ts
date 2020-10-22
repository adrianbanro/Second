import {Component, Input} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
    selector: 'slider',
    template: `
      Temperature: <br>
    <mat-slider [(ngModel)]="temperature"  min="0" max="100" step="0.5" >  </mat-slider>
    <div>{{temperature}}  </div>

    <br>

      Humidity: <br>
    <mat-slider [(ngModel)]="humidity"  min="0" max="100" step="0.5" >  </mat-slider>
    <div>{{humidity}}  </div>
   
    `,
    styles: [`
    .media {
    margin-bottom: 20px;
    }
    `]
   })

   export class SliderFormattingExample {
    @Input() temperature=20;
    @Input() humidity=50;

    formatLabel(value: number) {
      if (value >= 1000) {
        return Math.round(value / 1000) + 'k';
      }
  /*
    <mat-slider
  thumbLabel
  [displayWith]="formatLabel"
  tickInterval="1000"

step = "5" value "50"

  min="1"
  max="100000"></mat-slider>
  */


      return value;
    }
  }
  