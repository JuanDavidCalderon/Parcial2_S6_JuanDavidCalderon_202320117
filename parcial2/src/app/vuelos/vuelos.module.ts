import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VuelosListComponent } from './vuelos-list/vuelos-list.component';
import { VuelosDetailComponent } from './vuelos-detail/vuelos-detail.component';

@NgModule({
 imports: [
   CommonModule
 ],
 exports: [VuelosListComponent],
 declarations: [VuelosListComponent,VuelosDetailComponent]
})
export class VuelosModule { }
