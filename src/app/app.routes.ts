import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'shop', component: ShopComponent},
    { path: 'shop/:category', component: ShopComponent},
    { path: 'product/:id', component: ProductDetailComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
