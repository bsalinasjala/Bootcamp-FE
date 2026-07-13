import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  output,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar implements AfterViewInit {
  value = input('');
  search = output<string>();

  private readonly searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  searchTerm = '';

  ngAfterViewInit(): void {
    this.searchTerm = this.value();
    this.searchInput()?.nativeElement.focus();
  }

  onSubmit(): void {
    this.search.emit(this.searchTerm);
  }
}
