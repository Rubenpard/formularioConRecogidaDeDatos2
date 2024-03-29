import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registro } from './models/Registro';
import { FormsModule } from '@angular/forms';
import { Estado } from './models/Estado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'manejarDatos';

// Si no queremos asignar un MODELO a contacto: " contacto: any; "
// En el ngModel de HTML dara error, colocar " ? " : [(ngModel)]="contacto?.edad"
 
 contacto: Registro = new Registro();
  estados: Estado[]=[
  {
    id: 1,
    descripcion: 'pendiente',
  },
  {
    id: 2,
    descripcion: 'proceso',
  },
  {
    id: 3,
    descripcion: 'acreditado',
  },
  {
    id: 4,
    descripcion: 'aprobado',
  },
];

  constructor(){} 

  ngOnInit():void{
    console.log(this.contacto);
    this.contacto.estado=this.estados[0];
  }

  crear(): void{
    console.log(this.contacto);
  }

  //reinicia los valores al clicar en el botón
  cancelar(): void{
    this.contacto = new Registro();
    console.log('cancelado');
  }
}
