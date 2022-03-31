import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'activar',
    loadChildren: () => import('./activar/activar.module').then( m => m.ActivarPageModule)
  },
  {
    path: 'solicitud-codigo',
    loadChildren: () => import('./solicitud-codigo/solicitud-codigo.module').then( m => m.SolicitudCodigoPageModule)
  },
  {
    path: 'home-residente',
    loadChildren: () => import('./home-residente/home-residente.module').then( m => m.HomeResidentePageModule)
  },
  {
    path: 'web-embebed',
    loadChildren: () => import('./web-embebed/web-embebed.module').then( m => m.WebEmbebedPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
