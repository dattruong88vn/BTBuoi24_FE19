import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1SideBarComponent } from './baitap1-side-bar.component';

describe('Baitap1SideBarComponent', () => {
  let component: Baitap1SideBarComponent;
  let fixture: ComponentFixture<Baitap1SideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1SideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
