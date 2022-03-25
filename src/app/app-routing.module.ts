import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RickModule } from './api/rick/rick.module';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './plantillas/header/header.component'
//import { footerComponent } from './plantillas/footer/footer.component'

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rick/:id',
    loadChildren: () => import('./api/rick/rick.module').then(m => m.RickModule)
  },
  { 
    path: 'episodes', 
    loadChildren: () => import('./api/episode/episode.module').then(m => m.EpisodeModule) 
  },
  { 
    path: 'location', 
    loadChildren: () => import('./api/location/location.module').then(m => m.LocationModule) 
  },
  {
    path: 'header', component: HeaderComponent
  },
  /*{
    path: 'footer', component:footerComponent
  }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeaderComponent]