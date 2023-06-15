import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
numero: number

 constructor(){
  this.numero = 0;
 }

public registrarse(nombre: string, contraseña: string){



  const url = "http://localhost:3000/users/register"
  
  /*
  var datos = {
      nombre: nombre,
      passwordhash: contraseña
    }
    


  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos),
    mode: "cors"
  })
  .then(response => response)
  .then(data => console.log(data));
  
  console.log(nombre + " " + contraseña)
  */
}

}
