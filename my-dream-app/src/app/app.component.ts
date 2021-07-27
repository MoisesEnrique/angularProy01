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
  showHobbies: boolean;   //variable para usarlo con el boton
  
  constructor() {   //constructor que se instancia al inicio
    this.name = 'Moises Enrique';    //definimos la variables
    this.email = 'moises@unsa.edu.pe';
    this.webpage = 'http://www.unsa.edu.pe';
    this.hobbies = ["Futbol", "Programacion", "Netflix"];   //para utilizar el for
    this.showHobbies = false;   //se inicia en falso para no mostrar hasta hacer click al boton
  }

  toggleHobbies() {   //El metodo niega al metodo mostrar hobbies
    this.showHobbies = !this.showHobbies;
  }
  
  newHobby(hobby: any) {    //recibe el parametro hobby del formulario
    console.log(hobby.value);  //lo muestra en la consola del navegador
    this.hobbies.push(hobby.value);   //añade a la lista de hobbys que creamos
    hobby.value = "";   
    return false;   //retorna false para que no recargue la pagina, pq sino desaparece
  }
  //showHobbies() {   //creamos el metodo para mostrar los hobbies con el uso de un if
  //  return true;
  //}



}
    