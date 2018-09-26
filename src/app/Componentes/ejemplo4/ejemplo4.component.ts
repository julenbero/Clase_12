import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo4',
  templateUrl: './ejemplo4.component.html',
  styleUrls: ['./ejemplo4.component.css']
})
export class Ejemplo4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
	title: string = 'Ejemplo 4';

	description: string = 'Mis Objetos Personales';

	arreglos = ['Paso 1','Paso 2','Paso 3','Paso 4','Paso 5','Paso 6'];

}
	
