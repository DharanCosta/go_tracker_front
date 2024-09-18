import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandpageComponent } from './pages/landpage/landpage.component';
import { ContainerComponent } from './components/container/container.component';
import { MenuComponent } from "./components/menu/menu.component";
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LandpageComponent, 
    ContainerComponent,
    MenuComponent, 
    RegisterComponent,
    LoginComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gotrackerapp';
}
