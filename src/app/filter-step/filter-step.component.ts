import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterService } from '../services/filter.service';
import { ButtonComponent } from '../button/button.component';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-filter-step',
  imports: [FormsModule, CommonModule, ButtonComponent, DropdownComponent],
  templateUrl: './filter-step.component.html',
  styleUrl: './filter-step.component.scss',
  standalone: true
})
export class FilterStepComponent implements OnInit {
  @Input() stepNumber!: number;
  @Output() remove = new EventEmitter<void>();

  events: { name: string; attributes: string[] }[] = [];
  filteredEvents: { name: string; attributes: string[] }[] = [];
  searchQuery: string = '';
  dropdownOpen: boolean = false;

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.filterService.getEvents().subscribe(response => {
      this.events = response.events.map(event => ({
        name: event.type,
        attributes: event.properties.map(prop => prop.property)
      }));
      this.filteredEvents = this.events;
    });
  }

  filterEvents(searchQuery: string) {
    this.filteredEvents = this.events.filter(event =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectEvent(eventName: string) {
    this.searchQuery = eventName;
  }

  removeStep() {
    this.remove.emit();
  }
}
