import { Component } from '@angular/core';

@Component({    //para trabajar componentes
  selector: 'app-root',  // para seleccionar la eiqueta en el index.html
  templateUrl: './app.component.html',  //para llamar el component html
  styleUrls: ['./app.component.css']    //para llamar el component css
})
export class AppComponent {
  title = 'my-dream-app';
  name: string;   //definimos el tipo de la variable
  email;
  webpage: string;
  hobbies: string[];  //arreglo de strings


  constructor() {   //constructor que se instancia al inicio
    this.name = 'Moises Enrique';    //definimos la variables
    this.email = 'moises@unsa.edu.pe';
    this.webpage = 'http://www.unsa.edu.pe';
    this.hobbies = ["Futbol", "Programacion", "Netflix"];   //para utilizar el for
  }

  showhobbies() {   //creamos el metodo para mostrar los hobbies con el uso de un if
    return true;
  }
}
