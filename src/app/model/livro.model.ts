export interface Livro {
    id?: number;
    titulo:string;
    subtitulo?:string;
    resumo?:string;
    quantidadePaginas:number;
    dataPublicacao:string;
    editora:string;
    edicao?:number;
    autor:string;
    imagem:string;
  }