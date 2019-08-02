import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncardRememberWordComponent } from './incard-remember-word.component';

describe('IncardRememberWordComponent', () => {
  let component: IncardRememberWordComponent;
  let fixture: ComponentFixture<IncardRememberWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncardRememberWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncardRememberWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
