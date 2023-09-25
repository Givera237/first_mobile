import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SaveInformationComponent } from './save-information/save-information.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SaveFoodComponent } from './save-food/save-food.component';
import { ImcComponent } from './imc/imc.component';
import { FirstComponent } from './first/first.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveInformationComponent,
    SaveFoodComponent,
    ImcComponent,
    FirstComponent,
    PhotoComponent,
  ],
  imports: 
  [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    AppRoutingModule,
    NgImageSliderModule,
    HttpClientModule,
    ReactiveFormsModule
   
   
   
  ],
  providers:
   [
   
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
