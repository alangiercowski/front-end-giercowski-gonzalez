import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasComponent } from './mas.component';

describe('MasComponent', () => {
  let component: MasComponent;
  let fixture: ComponentFixture<MasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
