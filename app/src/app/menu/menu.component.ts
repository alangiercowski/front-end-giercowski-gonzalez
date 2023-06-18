import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  registro: Boolean
  login: Boolean
  cs: Boolean
  alumnos: Boolean
  materias: Boolean

  constructor(private router: Router) {
    this.registro = true;
    this.login = true;
    this.cs = false;
    this.alumnos = false;
    this.materias = false

  }

  ngOnInit() {
    if (localStorage["jwt"] != "") {
      this.registro = false;
      this.login = false;
      this.cs = true;
      this.alumnos = true;
      this.materias = true
    }
  }

  cerrarSesion() {
    localStorage["jwt"] = ""
    this.router.navigate(["/menu"])
    location.reload()//a
  }

}
