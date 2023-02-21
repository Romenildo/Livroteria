import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListarComponent } from './pages/listar/listar.component';

const routes: Routes = [
  {path: '', redirectTo: '/livros', pathMatch: 'full'},
  { path: 'livros', component: ListarComponent },
  { path: 'cadastrar', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
