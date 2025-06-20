import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  router = inject(Router);

  onAddNewRealState(): void {
    this.router.navigateByUrl('/realstates/add');
  }
}
