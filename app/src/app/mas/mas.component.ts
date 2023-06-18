import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mas',
  templateUrl: './mas.component.html',
  styleUrls: ['./mas.component.css']
})
export class MasComponent {
  url = "http://localhost:3000/personalizados"
  avisoAnotar: string
  avisoNota: string
  notas: string

  constructor(private http: HttpClient, private router: Router){
    this.avisoAnotar = ""
    this.avisoNota = ""
    this.notas = ""
  }
  public anotarAlumno(idAlumno: string, idMateria: string) {
    var idIntAlumno = parseInt(idAlumno)
    var idIntMateria = parseInt(idMateria)
    var body = {
      alumnoid: idIntAlumno,
      id: idIntMateria
    }

    var headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    })

    return this.http.post(this.url, body, { headers }).subscribe({
      next: (data: any) => {
        console.log(data);
        this.avisoAnotar = "alumno anotado"
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  public subirNota(idAlumno: string, idMateria: string, nota: string) {
    var idIntAlumno = parseInt(idAlumno)
    var idIntmateria = parseInt(idMateria)
    var intNota = parseInt(nota)

    var headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    })

    return this.http.post(this.url + "/" + idIntmateria + "/" + idIntAlumno + "/" + intNota , { headers }).subscribe({
      next: (data: any) => {
        console.log(data);
        this.avisoNota = "Nota cargada"
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  public mostrarNotas(id: string) {
    var idInt = parseInt(id)
      var headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("jwt")}`
      })
      return this.http.get(this.url + "/" + idInt + "/vernotas" , { headers }).subscribe({
        next: (data: any) => {
          console.log(data)
          this.notas = data
        },
        error: (error: any) => {
          console.log(error)
  
        }
      });
    }
  }

