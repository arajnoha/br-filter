import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterStepComponent } from '../filter-step/filter-step.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-filter',
  imports: [CommonModule, FilterStepComponent, ButtonComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  standalone: true
})
export class FilterComponent {
  filterSteps: number[] = [1];

  addFilterStep() {
    this.filterSteps.push(this.filterSteps.length + 1);
  }

  removeFilterStep(index: number) {
    if (index !== 0) {
      this.filterSteps.splice(index, 1);
    }
  }
}