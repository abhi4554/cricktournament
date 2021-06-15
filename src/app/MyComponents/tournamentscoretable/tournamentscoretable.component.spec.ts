import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentscoretableComponent } from './tournamentscoretable.component';

describe('TournamentscoretableComponent', () => {
  let component: TournamentscoretableComponent;
  let fixture: ComponentFixture<TournamentscoretableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentscoretableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentscoretableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
