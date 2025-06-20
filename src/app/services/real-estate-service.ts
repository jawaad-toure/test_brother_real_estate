import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RealEstate } from '../models/RealEstate';

@Injectable({
  providedIn: 'root',
})
export class RealEstateService {
  private http = inject(HttpClient);
  private jsonUrl = 'assets/data.json';

  realEstates: Observable<RealEstate[]> = this.http.get<RealEstate[]>(
    this.jsonUrl
  );

  getRealEstates(): Observable<RealEstate[]> {
    return this.http.get<RealEstate[]>(this.jsonUrl);
  }

  getRealEstateById(id: number): Observable<RealEstate[]> {
    return this.getRealEstates().pipe(
      map((realEstates) =>
        realEstates.filter((realEstate) => realEstate.id === id)
      )
    );
  }

  deleteRealEstateById(id: number): Observable<RealEstate[]> {
    return this.getRealEstates().pipe(
      map((realEstates) =>
        realEstates.filter((realEstate) => realEstate.id !== id)
      )
    );
  }
}
