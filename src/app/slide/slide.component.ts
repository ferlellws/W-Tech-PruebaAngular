import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SlideComponent {
  @Input() displayText: string = 'Comunicación escrita'; // Texto por defecto editable
}
