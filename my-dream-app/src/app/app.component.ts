import { Component } from '@angular/core';

@Component({    //para trabajar componentes
  selector: 'app-root',  // para seleccionar la eiqueta en el index.html
  templateUrl: './app.component.html',  //para llamar el component html
  styleUrls: ['./app.component.css']    //para llamar el component css
})
export class AppComponent {
  title = 'my-dream-app';
  name = 'Moises Enrique';    //definimos la variables
  email = 'moises@unsa.edu.pe';
  webpage = 'http://www.unsa.edu.pe';
}
