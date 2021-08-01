import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() nameUser:any; //definimos el input nameUser
  constructor() { }

  ngOnInit(): void {
  }

  sayHello(nameUser:any) { //para una alerta personalizada
    alert("Hola " + nameUser);
  }

}
