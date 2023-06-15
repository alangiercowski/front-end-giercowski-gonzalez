import { Component, Injectable } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent {

  error: String

  constructor(private http: HttpClient, private router: Router) {
    this.error = ""
  }

  public IniciarSesion(nombre: string, contraseña: string) {
    const url = "http://localhost:3000/users/login"

    var datos = {
      nombre: nombre,
      passwordhash: contraseña
    }

    return this.http.post(url, datos).subscribe({
      next: (data) => {
        this.error = ""
        localStorage.setItem("jwt", JSON.stringify(data))
        console.log(localStorage.getItem("jwt"))
        this.router.navigate(["/menu"])
      },
      error: (error) => {
        console.log(error)
        this.error = "La constraseña es incorrecta"
      }
    });


  }
}

