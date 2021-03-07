import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpQuizComponent } from './php-quiz.component';

describe('PhpQuizComponent', () => {
  let component: PhpQuizComponent;
  let fixture: ComponentFixture<PhpQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhpQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
