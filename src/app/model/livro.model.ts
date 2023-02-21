import { Autor} from 'src/app/model/autor.model';

export interface Livro {
    id?: string;
    titulo:string;
    subtitulo?:string;
    resumo?:string;
    quantidadePaginas:number;
    dataPublicacao:string;
    editora:string;
    edicao?:number;
    imagem:string;
    autores: Autor[];
  }