import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAyatComponent } from './card-ayat.component';

describe('CardAyatComponent', () => {
  let component: CardAyatComponent;
  let fixture: ComponentFixture<CardAyatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAyatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAyatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
