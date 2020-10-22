import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormcompComponent } from './formcomp/formcomp.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { RatingComponent } from './rating.component';
import { Rating22Component } from './rating22.component';
import { ProductComponent } from './product.component';
import { UserFormComponent } from './user-form.component';
import {MatSliderModule} from '@angular/material/slider';
//import {MatSliderModule} from '@angular/material';
import { SliderFormattingExample } from './slider.component';
import { AddrezzComponent } from './addrezz/addrezz.component';

import { RoomsComponent } from './rooms.component';

@NgModule({
  declarations: [
    AppComponent, RoomsComponent, ProductsComponent, SliderFormattingExample, FormcompComponent, RatingComponent, Rating22Component, ProductComponent, UserFormComponent, AddrezzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
