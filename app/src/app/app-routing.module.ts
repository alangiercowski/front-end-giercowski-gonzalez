import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
    path: ' ' ,
    component: AppComponent,
    title: 'app' 
},{
  path: 'register',
  component: LoginComponent,
  title: 'Registrarse' 
},{
  path: 'login',
  component: RegisterComponent,
  title: 'Iniciar sesión'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
