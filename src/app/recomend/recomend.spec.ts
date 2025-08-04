import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recomend } from './recomend';

describe('Recomend', () => {
  let component: Recomend;
  let fixture: ComponentFixture<Recomend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recomend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recomend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
