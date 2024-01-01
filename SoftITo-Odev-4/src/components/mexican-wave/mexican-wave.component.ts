import { Component } from '@angular/core';

@Component({
  selector: 'app-mexican-wave',
  standalone: true,
  imports: [],
  templateUrl: './mexican-wave.component.html',
  styleUrl: './mexican-wave.component.scss'
})
export class MexicanWaveComponent {
  wave1: string[] = [];
  wave2: string[] = ['M', 'e', 'x', 'i', 'c', 'a', 'n'];
  text: string = 'Wave';

  ngOnInit(): void {}

  waveStartLeft() {
    for (let i = 0; i < this.text.length; i++) {
      setTimeout(() => {
        this.wave1[i] = this.text[i];
        this.wave2[i] = '';
      }, i * 200);
      setTimeout(() => {
        this.wave1[i] = '';
        this.wave2[i] = this.text[i];
      }, (i + 1) * 200);
    }
  }
}
