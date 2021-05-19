import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadraCreateComponent } from './squadra-create.component';

describe('SquadraCreateComponent', () => {
  let component: SquadraCreateComponent;
  let fixture: ComponentFixture<SquadraCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadraCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadraCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
