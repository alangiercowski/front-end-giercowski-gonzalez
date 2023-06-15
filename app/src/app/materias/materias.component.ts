import { Component, Injectable } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent {
  url = "http://localhost:3000/materias"
  constructor(private http: HttpClient, private router: Router) { }

  public crearMateria(nombreMateria: string) {


    var body = {
      nombre: nombreMateria
    }
    var headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    })
    return this.http.post(this.url, body, { headers }).subscribe({
      next: (data) => {
        console.log("a")
        console.log(data)
      },
      error: (error) => {
        console.log("b")
        console.log(error)

      }
    });
  }

  public borrarMateria(id: string) {
    var idInt = parseInt(id)
    console.log("referencia 3")
  }

  public mostrarMateria(id: string) {
    var idInt = parseInt(id)
    console.log("STOP! YOU VIOLATED THE LAW! PAY THE COURT A FINE OR SERVE YOUR SENTENCE! YOUR STOLEN GOODS ARE NOW FORFEIT.")
  }

  public mostrarMaterias() {
    var headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    })
    return this.http.get(this.url, { headers }).subscribe({
      next: (data) => {
        console.log("a")
        console.log(data)
      },
      error: (error) => {
        console.log("b")
        console.log(error)

      }
    });
  }

}
