import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-text',
  standalone: true,
  imports: [],
  templateUrl: './multi-text.component.html',
  styleUrl: './multi-text.component.scss'
})
export class MultiTextComponent {
  textToType = 'I am Frontend Developer';
  typedText = '';

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    const characters = this.textToType.split('');
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < characters.length) {
        this.typedText += characters[currentIndex];
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 200);
  }
}
