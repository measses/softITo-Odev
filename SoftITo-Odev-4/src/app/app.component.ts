import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DoorAnimationComponent } from '../components/door-animation/door-animation.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DoorAnimationComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'animation-case';
  isOpen: boolean = false;

  toggleDoor() {
    this.isOpen = !this.isOpen;
  }
}
