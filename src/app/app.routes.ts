import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LandpageComponent } from './pages/landpage/landpage.component';

export const routes: Routes = [
    { path: '', redirectTo: 'landpage', pathMatch: 'full'},
    
    {path: 'register', component:RegisterComponent },
    {path: 'login', component:LoginComponent },
    {path: 'init', component:LandpageComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
