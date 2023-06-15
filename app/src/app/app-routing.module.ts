import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MateriasComponent } from './materias/materias.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{
    path: ' ' ,
    component: AppComponent,
    title: 'app' 
},{
  path: 'register',
  component: RegisterComponent,
  title: 'Registrarse' 
},{
  path: 'login',
  component: LoginComponent,
  title: 'Iniciar sesión'
},
{
  path: 'materias',
  component: MateriasComponent,
  title: 'Materias'
},
{
  path: 'menu',
  component: MenuComponent,
  title: 'Menu'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
