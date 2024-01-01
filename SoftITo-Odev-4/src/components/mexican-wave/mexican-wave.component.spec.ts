import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MexicanWaveComponent } from './mexican-wave.component';

describe('MexicanWaveComponent', () => {
  let component: MexicanWaveComponent;
  let fixture: ComponentFixture<MexicanWaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MexicanWaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MexicanWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
