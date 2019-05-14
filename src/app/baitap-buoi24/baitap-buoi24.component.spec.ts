import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapBuoi24Component } from './baitap-buoi24.component';

describe('BaitapBuoi24Component', () => {
  let component: BaitapBuoi24Component;
  let fixture: ComponentFixture<BaitapBuoi24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapBuoi24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapBuoi24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
