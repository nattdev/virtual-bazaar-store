import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { ArrivalsComponent } from "../../components/arrivals/arrivals.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, ArrivalsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
