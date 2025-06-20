import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateCard } from './real-estate-card';

describe('RealEstateCard', () => {
  let component: RealEstateCard;
  let fixture: ComponentFixture<RealEstateCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealEstateCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstateCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
