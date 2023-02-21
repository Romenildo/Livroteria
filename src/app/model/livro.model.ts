import { Autor} from 'src/app/model/autor.model';

export interface Livro {
    id: string;
    titulo:string;
    subTitulo?:string;
    resumo?:string;
    quantPaginas:number;
    dataPublicacao:string;
    editora:string;
    edicao:number;
    imagem:string;
    autores: Autor[];
  }