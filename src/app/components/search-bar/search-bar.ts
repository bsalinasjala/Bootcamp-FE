import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar implements AfterViewInit {
  @Input() value = '';
  @Output() search = new EventEmitter<string>();

  @ViewChild('searchInput') private readonly searchInput?: ElementRef<HTMLInputElement>;

  searchTerm = '';

  ngAfterViewInit(): void {
    this.searchTerm = this.value;
    this.searchInput?.nativeElement.focus();
  }

  onSubmit(): void {
    this.search.emit(this.searchTerm);
  }
}
