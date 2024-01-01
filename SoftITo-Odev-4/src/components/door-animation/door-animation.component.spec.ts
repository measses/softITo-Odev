import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorAnimationComponent } from './door-animation.component';

describe('DoorAnimationComponent', () => {
  let component: DoorAnimationComponent;
  let fixture: ComponentFixture<DoorAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoorAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoorAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
