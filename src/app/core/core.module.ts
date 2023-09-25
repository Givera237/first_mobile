import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SidebarModule} from 'ng-sidebar';




@NgModule({
  declarations:
   [
    HeaderComponent,
    FooterComponent
   ],
  imports: 
  [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    

  ],
  exports:
  [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
