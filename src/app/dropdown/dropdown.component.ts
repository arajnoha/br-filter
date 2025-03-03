import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  imports: [CommonModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true
})
export class DropdownComponent {
  @Input() items: { name: string; attributes: string[] }[] = [];
  @Input() searchQuery: string = '';
  @Output() selectEvent = new EventEmitter<string>();
  @Output() filterEvents = new EventEmitter<string>();
  @Output() toggleDropdown = new EventEmitter<void>();

  dropdownOpen: boolean = false;

  onSearchQueryChange() {
    this.filterEvents.emit(this.searchQuery);
  }

  onItemSelect(eventName: string) {
    this.selectEvent.emit(eventName);
    this.dropdownOpen = false;
  }

  toggleDropdownState() {
    this.toggleDropdown.emit();
    this.dropdownOpen = !this.dropdownOpen;
  }
}
