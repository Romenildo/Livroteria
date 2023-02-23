import { Injectable} from '@angular/core';
import {  BehaviorSubject } from 'rxjs';
import { Autor } from '../model/autor.model';
import { Filtro } from '../model/filtro.model';
import { Livro } from '../model/livro.model';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class LivroService {

  public livros$: BehaviorSubject<Livro[]> = new BehaviorSubject<Livro[]>([]);

  constructor( private apiService: ApiService) { }


  atualizarFiltroBusca(filtro:string){
    this.apiService.getLivros().subscribe((res:any) => {
      if(filtro == ""){
        this.livros$.next(res)
      }else{
        this.livros$.next(res.filter((livro:Livro)=>{
          return this.filtrarPorNome(livro, filtro)
        }))
      }
    })
  }

  atualizarFiltroBuscaAvancada(filtro:Filtro){
    this.apiService.getLivros().subscribe((res:any) => {
        this.livros$.next(res.filter((livro:Livro)=>{
          return this.filtragemBuscaAvancada(livro, filtro)
        }))

        if(filtro.titulo != ""){
          this.livros$.next(res.filter((livro:Livro)=>{
            return livro.titulo.indexOf(filtro.titulo) != -1
          }))
        }
        if(filtro.editora != ""){
          this.livros$.next(res.filter((livro:Livro)=>{
            return livro.editora.indexOf(filtro.editora) != -1
          }))
        }
        if(filtro.autor != ""){
          this.livros$.next(res.filter((livro:Livro)=>{
            return livro.autores.filter((autor:Autor)=>autor.nome.indexOf(filtro.autor) != -1).length > 0
          }))
        }
    })
  }

  filtrarPorNome(livro:Livro, filtro:string){
    if(
         (livro.subTitulo.indexOf(filtro) != -1 )
      || (livro.titulo.indexOf(filtro) != -1) 
      || (livro.editora.indexOf(filtro) != -1) 
      || (livro.autores.filter((autor:Autor)=>autor.nome.indexOf(filtro) != -1).length > 0)
      ){
      return true
    }
    return false;
  }

  filtragemBuscaAvancada(livro:Livro, filtro:Filtro){
    const anoPublicacao = parseInt(livro.dataPublicacao.split("-")[0].split("/")[2])
    if(
         (anoPublicacao <= filtro.anoMax && anoPublicacao >= filtro.anoMin ) 
      && (livro.edicao <= filtro.edicaoMax && livro.edicao >= filtro.edicaoMin ) 
      && (livro.quantPaginas <= filtro.qtPagMax && livro.quantPaginas >= filtro.qtPagMin ) 
      ){
      return true
    }
    return false;
  }

}
