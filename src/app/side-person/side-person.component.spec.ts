import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePersonComponent } from './side-person.component';

describe('SidePersonComponent', () => {
  let component: SidePersonComponent;
  let fixture: ComponentFixture<SidePersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidePersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
