import { Component, input } from '@angular/core';
import { RealEstate } from '../../../models/RealEstate';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-real-estate-card',
  imports: [DatePipe],
  templateUrl: './real-estate-card.html',
  styleUrl: './real-estate-card.scss',
})
export class RealEstateCard {
  realEstate = input<RealEstate>();
}
