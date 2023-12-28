import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sayilarStr: string = '';
  toplam: number | null = null;
  metin: string = '';
  kelimeSayisi: number = 0;
  karakterSayisi: number = 0;
  sayilar: number[] = [];
  ciftSayilarToplami: number = 0;

  hesaplaToplam() {
    const sayilarDizi = this.sayilarStr.split(',').map(Number);
    this.toplam = sayilarDizi.reduce((a, b) => a + b, 0);
  }


  analizleMetin() {

    const kelimeler = this.metin.split(' ');


    this.kelimeSayisi = kelimeler.length;


    this.karakterSayisi = this.metin.replace(/\s+/g, '').length;
  }

  girilenSayi: number | undefined;
  sonuc: number | undefined;

  faktoriyelHesapla() {
    if (this.girilenSayi !== undefined) {
      this.sonuc = this.hesaplaFaktoriyel(this.girilenSayi);
    }
  }

  private hesaplaFaktoriyel(sayi: number): number {
    if (sayi === 0 || sayi === 1) {
      return 1;
    } else {
      return sayi * this.hesaplaFaktoriyel(sayi - 1);
    }
  }


  hesaplaCiftSayilarToplami() {
    this.ciftSayilarToplami = this.sayilar
      .filter(sayi => sayi % 2 === 0)
      .reduce((a, b) => a + b, 0);
  }


}
