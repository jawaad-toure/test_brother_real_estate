import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { RealEstate } from '../../../models/RealEstate';
import { RealEstateService } from '../../../services/real-estate-service';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-real-estate-preview',
  imports: [AsyncPipe, DatePipe],
  templateUrl: './real-estate-preview.html',
  styleUrl: './real-estate-preview.scss',
})
export class RealEstatePreview {
  private activatedRoute = inject(ActivatedRoute);
  private realEstateService = inject(RealEstateService);
  private router = inject(Router);

  realEstateId!: number;
  realEstate$!: Observable<RealEstate[]>;

  ngOnInit(): void {
    this.realEstateId = +this.activatedRoute.snapshot.params['id'];
    this.realEstate$ = this.realEstateService
      .getRealEstateById(this.realEstateId)
      .pipe(tap((data) => console.log(data)));
  }

  onDelete(): void {
    this.router.navigate(['/realestates']);
  }
}
