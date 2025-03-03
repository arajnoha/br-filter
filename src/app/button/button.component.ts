import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() appearance: 'cta' | 'text-like' = 'cta';  // Main style
  @Input() color: 'normal' | 'danger' | 'blue' | 'red' = 'normal';  // Color variation
  @Input() variation?: 'add';  // Subtle, more fine-tuned types
  @Input() role: 'button' | 'submit' = 'button';  // Button role
}