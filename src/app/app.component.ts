import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registro } from './models/Registro';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'manejarDatos';
// Si no queremos asignar un MODELO a contacto: " contacto: any; "
// En el ngModel de HTML dara error, colocar " ? " : [(ngModel)]="contacto?.edad" 
  contacto: Registro = new Registro();

  constructor(){} 

  ngOnInit():void{
    console.log(this.contacto)
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
