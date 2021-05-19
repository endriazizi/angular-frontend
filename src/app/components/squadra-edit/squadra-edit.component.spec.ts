import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadraEditComponent } from './squadra-edit.component';

describe('SquadraEditComponent', () => {
  let component: SquadraEditComponent;
  let fixture: ComponentFixture<SquadraEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadraEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
