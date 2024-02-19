import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerWindowComponent } from './player-window.component';

describe('PlayerWindowComponent', () => {
  let component: PlayerWindowComponent;
  let fixture: ComponentFixture<PlayerWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
