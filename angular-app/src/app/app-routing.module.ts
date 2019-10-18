import { ContactComponent } from './shared/components/contact/contact.component';
import { AboutComponent } from './shared/components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    { path: 'movies', component: MoviesComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'cart', component: CartComponent},
    { path: '', component: MoviesComponent, pathMatch : 'full'},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
