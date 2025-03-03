import { Component } from '@angular/core';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-root',
  imports: [FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'br-filter';
}
