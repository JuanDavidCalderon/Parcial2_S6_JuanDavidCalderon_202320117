import { Component, OnInit, Input } from '@angular/core';
import { Vuelos } from '../vuelos';

@Component({
  selector: 'app-vuelos-detail',
  templateUrl: './vuelos-detail.component.html',
  styleUrls: ['./vuelos-detail.component.css'],
  standalone:false
})
export class VuelosDetailComponent implements OnInit {
  @Input() vuelosDetail!: Vuelos;

  constructor() { }

  ngOnInit() {
  }

}
