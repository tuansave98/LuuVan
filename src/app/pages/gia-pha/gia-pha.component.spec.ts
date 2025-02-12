import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaPhaComponent } from './gia-pha.component';

describe('GiaPhaComponent', () => {
  let component: GiaPhaComponent;
  let fixture: ComponentFixture<GiaPhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiaPhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiaPhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
