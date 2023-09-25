import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilComponent } from './components/accueil/accueil.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AccueilRoutingModule } from './accueil-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({

  declarations: 
  [
    AccueilComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgImageSliderModule,
    AccueilRoutingModule
  ],
  providers :
  [
    
  ],
 
})
export class AccueilModule { }
