import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAutocompleteComponent } from './side-autocomplete.component';

describe('SideAutocompleteComponent', () => {
  let component: SideAutocompleteComponent;
  let fixture: ComponentFixture<SideAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
