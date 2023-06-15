import { Component, Injectable } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



@Injectable()
export class RegisterComponent {
  error: String

  url = "http://localhost:3000/users/register"

  constructor(private http: HttpClient, private router: Router) {
    this.error = ""
  }

  registrarse(nombre: string, constraseña: string) {
    return this.http.post(this.url, {
      "nombre": nombre,
      "passwordhash": constraseña
    }).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(["/login"]);
      },
      error: (error) => {
        console.log(error)
        this.error = "El nombre de usuario ya esta en uso"
        
      }
    });
  }
}

