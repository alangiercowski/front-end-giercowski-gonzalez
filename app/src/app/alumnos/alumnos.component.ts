import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  url = "http://localhost:3000/alumnos"
  alumnos: String;
  alumno: String;
  error: String;
  avisoCrear: String;
  avisoBorrar: String;
  avisoModificar: String;

  constructor(private http: HttpClient, private router: Router) {
    this.alumnos = "";
    this.alumno = "";
    this.error = "";
    this.avisoCrear = "";
    this.avisoBorrar = "";
    this.avisoModificar = "";
   }

  public crearAlumno(nombreMateria: string) {

    var body = {
      nombre: nombreMateria
    }

    var headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    })

    return this.http.post(this.url, body, { headers }).subscribe({
      next: (data: any) => {
        console.log(data);
        this.avisoCrear = "alumno agregado"
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  public borrarAlumno(id: string) {
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

  public mostrarAlumno(id: string) {
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
          this.alumno = data
        },
        error: (error: any) => {
          console.log(error)
  
        }
      });
    }
  }

  public mostrarAlumnos() {
    var headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    })
    return this.http.get(this.url, { headers }).subscribe({
      next: (data: any) => {
        console.log(data)
        this.alumnos = data
      },
      error: (error: any) => {
        console.log(error)

      }
    });
  }

  public modificarAlumno(id: string, nombreAlumno: string){
    var idInt = parseInt(id)
    var body = {
      nombre: nombreAlumno
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
          this.avisoModificar = "alumno modificado"
        },
        error: (error: any) => {
          console.log(error)
  
        }
      });
    }
  }

}
