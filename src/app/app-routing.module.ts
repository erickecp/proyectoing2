import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'Home',
    //Component: HomeComponent
  },
  {
    path: 'Detalles',
    //component: detallesComponent
  },
  {
    path: '**',
    redirectTo: '/Home',
    pathMatch: 'full'
  }

  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   //RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

