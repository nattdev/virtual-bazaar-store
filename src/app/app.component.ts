import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShopComponent } from './pages/shop/shop.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ShopComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'virtual-bazaar-store';

  ngOnInit(): void {
    initFlowbite();
  }
}

