import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlcInputComponent } from './tlc-input.component';

describe('TlcInputComponent', () => {
  let component: TlcInputComponent;
  let fixture: ComponentFixture<TlcInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlcInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlcInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
