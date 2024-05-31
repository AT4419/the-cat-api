import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllCatsComponent } from './all-cats/all-cats.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path: 'app-home', component: HomeComponent},
  {path: 'app-allcat', component: AllCatsComponent, canActivate: [LoginGuard]},
  {path: 'app-login', component: LoginComponent},
  {path: 'app-register', component: RegisterComponent},
  {
    path: '',
    redirectTo: 'app-home',
    pathMatch: 'full',
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
