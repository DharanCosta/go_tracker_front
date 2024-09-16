import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandpageComponent } from './components/landpage/landpage.component';
import { ContainerComponent } from './components/container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandpageComponent, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gotrackerapp';
}
