import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveFoodComponent } from './save-food/save-food.component';
import { ImcComponent } from './imc/imc.component';
import { SaveInformationComponent } from './save-information/save-information.component';
import { FirstComponent } from './first/first.component';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = 
[
  {path: 'accueil', loadChildren: () => import('./accueil/accueil.module').then (m => m.AccueilModule) },
  {path:'', component : FirstComponent},
  {path:'food', component : SaveFoodComponent},
  {path:'info', component: SaveInformationComponent},
  {path : ':id/imc', component: ImcComponent},
  {path : 'tof', component : PhotoComponent},
  { path: '**', redirectTo: 'saccueil'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
