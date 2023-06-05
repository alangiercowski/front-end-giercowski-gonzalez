import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public IniciarSesion(nombre: string, contraseña: string){
    const url = "http://localhost:3000/users/login"
  
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
  }).then(function (response) {
    response.json().then(function (data) {
      console.log(JSON.stringify(data));
    })
  });
  }
}

