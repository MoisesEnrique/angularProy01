import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({    //para trabajar componentes
  selector: 'app-root',  // para seleccionar la eiqueta en el index.html
  templateUrl: './app.component.html',  //para llamar el component html
  styleUrls: ['./app.component.css']    //para llamar el component css
})

export class AppComponent {
  users = ["Pablo", "Pedro", "Marcos", "Lucas"];   //lista de users
  activated = false;  // variable booleana

  
  title = 'my-dream-app';
  name: string;   //definimos el tipo de la variable
  age: number;
  email;
  webpage: string;
  hobbies: string[];  //arreglo de strings
  showHobbies: boolean;   //variable para usarlo con el boton
  


  /*constructor() {   //constructor que se instancia al inicio
    this.name = 'Moises Enrique';    //definimos la variables
    this.age = 25;
    this.email = 'moises@unsa.edu.pe';
    this.webpage = 'http://www.unsa.edu.pe';
    this.hobbies = ["Futbol", "Programacion", "Netflix"];   //para utilizar el for
    this.showHobbies = false;   //se inicia en falso para no mostrar hasta hacer click al boton
  }*/

  posts = [] as any;


  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      //console.log(data);
      this.posts = data;
    });

    this.name = 'Moises Enrique';    //definimos la variables
    this.age = 25;
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

  sayHello(){ //para una alerta general
    alert("Hola desde app.component")
  }

  deleteUser(user:any){
    for(let i = 0; i < this.users.length; i++) { //recorremos la lista de usuarios
      if (user == this.users[i]){
        this.users.splice(i, 1); //lo elimina en la posicion i un elemento
      }
    }
  }

  addUser(newUser:any){
    this.users.push(newUser.value);   //añadir a la lista, con value extraigo el valor del objeto
    newUser.value = '';   //limpiar caja de texto
    newUser.focus();
    return false;   //para no recargar la web
  }




}
    