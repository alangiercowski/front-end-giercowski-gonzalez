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
  materias: String;
  materia: String;
  error: String;
  avisoCrear: String;
  avisoBorrar: String;
  avisoModificar: String;

  constructor(private http: HttpClient, private router: Router) {
    this.materias = "";
    this.materia = "";
    this.error = "";
    this.avisoCrear = "";
    this.avisoBorrar = "";
    this.avisoModificar = "";
   }

  public crearMateria(nombreMateria: string) {

    var body = {
      nombre: nombreMateria
    }

    var headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    })

    return this.http.post(this.url, body, { headers }).subscribe({
      next: (data: any) => {
        console.log(data);
        this.avisoCrear = "materia creada"
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  public borrarMateria(id: string) {
    var idInt = parseInt(id)
    if(idInt == null){
      this.error = "ingresa un id"
      return 0;
    }else{
      this.error = ""
      var headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("jwt")}`
      })
      return this.http.delete(this.url + "/" + idInt , { headers }).subscribe({
        next: (data: any) => {
          console.log(data)
          this.avisoBorrar = "Materia borrada"
        },
        error: (error: any) => {
          console.log(error)
  
        }
      });
    }
  }

  public mostrarMateria(id: string) {
    var idInt = parseInt(id)
    if(idInt == null){
      this.error = "ingresa un id"
      return 0;
    }else{
      this.error = ""
      var headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("jwt")}`
      })
      return this.http.get(this.url + "/" + idInt , { headers }).subscribe({
        next: (data: any) => {
          console.log(data)
          this.materia = data
        },
        error: (error: any) => {
          console.log(error)
  
        }
      });
    }
  }

  public mostrarMaterias() {
    var headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    })
    return this.http.get(this.url, { headers }).subscribe({
      next: (data: any) => {
        console.log(data)
        this.materias = data
      },
      error: (error: any) => {
        console.log(error)

      }
    });
  }

  public modificarMateria(id: string, nombreMateria: string){
    var idInt = parseInt(id)
    var body = {
      nombre: nombreMateria
    }
    if(idInt == null){
      this.error = "ingresa un id"
      return 0;
    }else{
      this.error = ""
      var headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("jwt")}`
      })
      return this.http.put(this.url + "/" + idInt , body, { headers }).subscribe({
        next: (data: any) => {
          console.log(data)
          this.avisoModificar = "Materia modificada"
        },
        error: (error: any) => {
          console.log(error)
  
        }
      });
    }
  }

}
