import { Component } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-explanation',
  standalone: true,
  imports: [SlideComponent],
  templateUrl: './explanation.component.html',
  styleUrl: './explanation.component.css'
})
export class ExplanationComponent {

}
