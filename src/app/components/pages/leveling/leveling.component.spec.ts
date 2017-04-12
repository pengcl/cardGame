/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LevelingComponent } from './leveling.component';

describe('LevelingComponent', () => {
  let component: LevelingComponent;
  let fixture: ComponentFixture<LevelingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
