import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielsitComponent } from './movielsit.component';

describe('MovielsitComponent', () => {
  let component: MovielsitComponent;
  let fixture: ComponentFixture<MovielsitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovielsitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovielsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
