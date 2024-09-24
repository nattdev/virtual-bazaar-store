import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { ArrivalsComponent } from "../../components/arrivals/arrivals.component";
import { OurServicesComponent } from "../../components/our-services/our-services.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, ArrivalsComponent, OurServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
