import { Component } from '@angular/core';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent {
  public crearMateria(nombreMateria: string) {
    const url = "http://localhost:3000/materias"

    var datos = {
      nombre: nombreMateria
    }

    var jwt = localStorage.getItem("jwt")?.toString()
    console.log(jwt)

    fetch(url, {
      method: "POST",
      headers: <any> {
        "a</div></div>uthorization": jwt,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos),
      mode: "cors"
    })
      .then(response => response)
      .then(data => console.log(data));

    console.log(nombreMateria)
  }

  public borrarMateria(id: string){
    var idInt = parseInt(id)
    console.log("referencia 3")
  }

  public mostrarMateria(id: string){
    var idInt = parseInt(id)
    console.log("STOP! YOU VIOLATED THE LAW! PAY THE COURT A FINE OR SERVE YOUR SENTENCE! YOUR STOLEN GOODS ARE NOW FORFEIT.")
  }

  public mostrarMaterias(){
    console.log("welcome, to oblivion")
  }

}
