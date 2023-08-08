import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseDetailsInfoComponent } from './release-details-info.component';

describe('ReleaseDetailsInfoComponent', () => {
  let component: ReleaseDetailsInfoComponent;
  let fixture: ComponentFixture<ReleaseDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseDetailsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
