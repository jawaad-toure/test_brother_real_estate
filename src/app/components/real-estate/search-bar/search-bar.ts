import { Component, model, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  search = model<string>('');
  searchButtonClicked = output();
  
  onSearch(): void {
    this.searchButtonClicked.emit();
  }
  
}
