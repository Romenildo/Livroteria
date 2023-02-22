import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavBarComponent } from './components/template/nav-bar/nav-bar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ListaLivrosComponent } from './components/lista-livros/lista-livros.component';
import { LivroComponent } from './components/lista-livros/livro/livro.component';
import { LivroDetalheComponent } from './components/lista-livros/livro-detalhe/livro-detalhe.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { ListaRecentesComponent } from './components/lista-recentes/lista-recentes.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './editar/editar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    ListarComponent,
    CadastroComponent,
    FooterComponent,
    ListaLivrosComponent,
    LivroComponent,
    LivroDetalheComponent,
    FiltroComponent,
    ListaRecentesComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
