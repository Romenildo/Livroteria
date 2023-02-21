import { Component } from '@angular/core';
import { Livro } from 'src/app/model/livro.model';
import { Autor } from 'src/app/model/autor.model';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.scss']
})
export class ListaLivrosComponent {

  livros:Livro[] = [
    {
    id:"1232131", 
    titulo:"The angel next door",
    subtitulo:"Light Novel",
    resumo: "nada",
    quantidadePaginas:267,
    dataPublicacao:"01/02/2020",
    edicao: 1,
    editora:"sekaiScan",
    autores:[new Autor("jamesBond")],
    imagem:"https://m.media-amazon.com/images/I/817Yi2LI-jL._AC_UL480_QL65_.jpg"
  }
]
}
