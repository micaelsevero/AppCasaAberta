import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', loadChildren: './plugin/plugin.module#PluginPageModule' },
  { path: 'cadastrar-usuario', loadChildren: './cadastrar-usuario/cadastrar-usuario.module#CadastrarUsuarioPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },  
  { path: 'eventos', loadChildren: './eventos/eventos.module#EventosPageModule' },  
  { path: 'plugin', loadChildren: './plugin/plugin.module#PluginPageModule' },
  { path: '**', loadChildren: './erro/erro.module#ErroPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
