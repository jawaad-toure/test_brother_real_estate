import { Component, inject, model, OnInit, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RealEstateCard } from '../real-estate-card/real-estate-card';
import { RealEstateService } from '../../../services/real-estate-service';
import { RealEstate } from '../../../models/RealEstate';
import { SearchBar } from '../search-bar/search-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-real-estate-list',
  imports: [SearchBar, RealEstateCard, AsyncPipe],
  templateUrl: './real-estate-list.html',
  styleUrl: './real-estate-list.scss',
})
export class RealEstateList implements OnInit {
  private router = inject(Router);
  private realStateService = inject(RealEstateService);
  realEstates$!: Observable<RealEstate[]>;
  search = model<string>('');

  ngOnInit(): void {
    this.realEstates$ = this.realStateService.getRealEstates();
  }

  filteredRealEstatesList(): void {
    this.realEstates$ = this.realStateService
      .getRealEstates()
      .pipe(
        map((realEstates) =>
          realEstates.filter((realEstate) =>
            realEstate.name.toLowerCase().includes(this.search().toLowerCase())
          )
        )
      );
  }

  onPreviewRealEstate(realEstateId: number): void {
    this.router.navigate(['/realestates', `${realEstateId}`]);
  }

  onSortByHighPrice(event: Event): void {
    const clickedElement = event.target as HTMLElement;
    const hasActive = clickedElement.classList.contains('active');

    if (hasActive) {
      this.realEstates$ = this.realStateService
        .getRealEstates()
        .pipe(
          map((realEstates) => realEstates.sort((a, b) => b.price - a.price))
        );
    } else {
      this.realEstates$ = this.realStateService.getRealEstates();
    }
  }

  onSortByLowPrice(event: Event): void {
    const clickedElement = event.target as HTMLElement;
    const hasActive = clickedElement.classList.contains('active');

    if (hasActive) {
      this.realEstates$ = this.realStateService
        .getRealEstates()
        .pipe(
          map((realEstates) => realEstates.sort((a, b) => a.price - b.price))
        );
    } else {
      this.realEstates$ = this.realStateService.getRealEstates();
    }
  }

  onSortByRecentPost(event: Event): void {
    const clickedElement = event.target as HTMLElement;
    const hasActive = clickedElement.classList.contains('active');

    if (hasActive) {
      this.realEstates$ = this.realStateService.getRealEstates().pipe(
        map((realEstates) =>
          realEstates.sort((a, b) => {
            const dateA = a.posted ? new Date(a.posted).getTime() : 0;
            const dateB = b.posted ? new Date(b.posted).getTime() : 0;
            return dateA - dateB;
          })
        )
      );
    } else {
      this.realEstates$ = this.realStateService.getRealEstates();
    }
  }

  onSortByOldPost(event: Event): void {
    const clickedElement = event.target as HTMLElement;
    const hasActive = clickedElement.classList.contains('active');

    if (hasActive) {
      this.realEstates$ = this.realStateService.getRealEstates().pipe(
        map((realEstates) =>
          realEstates.sort((a, b) => {
            const dateA = a.posted ? new Date(a.posted).getTime() : 0;
            const dateB = b.posted ? new Date(b.posted).getTime() : 0;
            return dateB - dateA;
          })
        )
      );
    } else {
      this.realEstates$ = this.realStateService.getRealEstates();
    }
  }
}
