import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncardLearningByChooseRadioAnswerComponent } from './incard-learning-by-choose-radio-answer.component';

describe('IncardLearningByChooseRadioAnswerComponent', () => {
  let component: IncardLearningByChooseRadioAnswerComponent;
  let fixture: ComponentFixture<IncardLearningByChooseRadioAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncardLearningByChooseRadioAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncardLearningByChooseRadioAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
