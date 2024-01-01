import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-door-animation',
  standalone: true,
  imports: [],
  templateUrl: './door-animation.component.html',
  styleUrl: './door-animation.component.scss',

})
export class DoorAnimationComponent  {
  class: string = "";

  getClass() {
    return this.class;
  }

  statusDoor(status: string) {
    this.class = status;
  }


}
