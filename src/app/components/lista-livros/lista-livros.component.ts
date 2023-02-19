import { Component } from '@angular/core';
import { Livro } from 'src/app/model/livro.model';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.scss']
})
export class ListaLivrosComponent {

  livros:Livro[] = [
    {
    id:1232131, 
    titulo:"The angel next door",
    subtitulo:"Light Novel",
    resumo: "nada",
    quantidadePaginas:267,
    dataPublicacao:"01/02/2020",
    edicao: 1,
    editora:"sekaiScan",
    autor:"Marina J. Lostetter",
    imagem:"https://m.media-amazon.com/images/I/817Yi2LI-jL._AC_UL480_QL65_.jpg"
  },
  {
    id:1232131, 
    titulo:"The angel next door 3",
    subtitulo:"Light Novel",
    resumo: "nada",
    quantidadePaginas:267,
    dataPublicacao:"01/02/2020",
    edicao: 1,
    editora:"sekaiScan",
    autor:"Marina J.",
    imagem:"https://m.media-amazon.com/images/I/81KYKUKVn0L._AC_UL480_QL65_.jpg"
  },
  {
    id:1232131, 
    titulo:"The angel next door 4",
    subtitulo:"Light Novel",
    resumo: "nada",
    quantidadePaginas:267,
    dataPublicacao:"01/02/2020",
    edicao: 1,
    editora:"sekaiScan",
    autor:"Marina J. Lostetter",
    imagem:"https://m.media-amazon.com/images/I/81F38KRM1KS._AC_UL480_QL65_.jpg"
  },
  {
    id:1232131, 
    titulo:"The Beginnig after the end 7",
    subtitulo:"Light Novel",
    resumo: "nada",
    quantidadePaginas:267,
    dataPublicacao:"01/02/2020",
    edicao: 1,
    editora:"sekaiScan",
    autor:"TurtleMe",
    imagem:"https://m.media-amazon.com/images/I/81H-0MMICTL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id:1232131, 
    titulo:"The Beginnig after the end 3",
    subtitulo:"Light Novel",
    resumo: "nada",
    quantidadePaginas:267,
    dataPublicacao:"01/02/2020",
    edicao: 1,
    editora:"sekaiScan",
    autor:"TurtleMe",
    imagem:"https://m.media-amazon.com/images/I/81CLzDO1k6L._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    id:1232131, 
    titulo:"The Beginnig after the end 1",
    subtitulo:"Light Novel",
    resumo: "nada",
    quantidadePaginas:267,
    dataPublicacao:"01/02/2020",
    edicao: 1,
    editora:"sekaiScan",
    autor:"TurtleMe",
    imagem:"https://m.media-amazon.com/images/I/81eqlOf4owL._AC_UL480_FMwebp_QL65_.jpg"
  }
]
}
