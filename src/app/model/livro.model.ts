import { Autor} from 'src/app/model/autor.model';

export interface Livro {
    id: string;
    titulo:string;
    subTitulo:string;
    resumo:string;
    quantPaginas:number;
    dataPublicacao:string;
    editora:string;
    edicao:number;
    imagem:string;
    autor:string;
    criado_em:string;
    autores: Autor[];
  }