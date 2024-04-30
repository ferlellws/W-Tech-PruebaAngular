import { Component } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
