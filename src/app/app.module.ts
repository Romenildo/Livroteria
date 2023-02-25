import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { EditarComponent } from './components/editar/editar.component';
import { FiltroLetrasComponent } from './components/filtro/filtro-letras/filtro-letras.component';

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
    EditarComponent,
    FiltroLetrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatSnackBarModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
