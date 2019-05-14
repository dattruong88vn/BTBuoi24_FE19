import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap3ContentComponent } from './bai-tap3-content.component';

describe('BaiTap3ContentComponent', () => {
  let component: BaiTap3ContentComponent;
  let fixture: ComponentFixture<BaiTap3ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap3ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap3ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
