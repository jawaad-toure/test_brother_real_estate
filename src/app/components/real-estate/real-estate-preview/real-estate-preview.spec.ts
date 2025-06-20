import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstatePreview } from './real-estate-preview';

describe('RealEstatePreview', () => {
  let component: RealEstatePreview;
  let fixture: ComponentFixture<RealEstatePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstatePreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstatePreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
