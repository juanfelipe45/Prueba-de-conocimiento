import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DatosComponent } from '../components/datos.component';



@NgModule({
  declarations: [
    DatosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DatosComponent
  ]
})
export class DatosModule { }
