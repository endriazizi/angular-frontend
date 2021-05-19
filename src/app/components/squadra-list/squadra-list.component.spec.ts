import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadraListComponent } from './squadra-list.component';

describe('SquadraListComponent', () => {
  let component: SquadraListComponent;
  let fixture: ComponentFixture<SquadraListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadraListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
