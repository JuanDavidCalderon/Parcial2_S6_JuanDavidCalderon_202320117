import { Component, OnInit } from '@angular/core';
import { Vuelos } from '../vuelos';
import { VuelosService } from '../vuelos.service';


@Component({
  selector: 'app-vuelos-list',
  templateUrl: './vuelos-list.component.html',
  styleUrls: ['./vuelos-list.component.css'],
  standalone:false,

})
export class VuelosListComponent implements OnInit {
  vuelos: Array<Vuelos> = [];
  selectedVuelo!: Vuelos;
  selected = false;

  constructor(private vuelosService: VuelosService) { }

  getVuelos(): void {
   this.vuelosService.getVuelos().subscribe((vuelos) => {
     this.vuelos = vuelos;
   });
 }

 onSelected(vuelos: Vuelos): void {
    this.selected = true;
    this.selectedVuelo = vuelos;
  }

 ngOnInit() {
   this.getVuelos();
 }

}
