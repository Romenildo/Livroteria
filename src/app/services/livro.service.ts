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
       let listaEmFiltragem = res
       
       listaEmFiltragem = listaEmFiltragem.filter((livro:Livro)=>{
          return this.filtragemBuscaAvancada(livro, filtro)
        })

        if(filtro.titulo != ""){
          listaEmFiltragem = listaEmFiltragem.filter((livro:Livro)=>{
            return livro.titulo.indexOf(filtro.titulo) != -1
          })
        }
        if(filtro.editora != ""){
          listaEmFiltragem = listaEmFiltragem.filter((livro:Livro)=>{
            return livro.editora.indexOf(filtro.editora) != -1
          })
        }
        if(filtro.autor != ""){
          listaEmFiltragem = listaEmFiltragem.filter((livro:Livro)=>{
            return livro.autores.filter((autor:Autor)=>autor.nome.indexOf(filtro.autor) != -1).length > 0
          })
        }
        this.livros$.next(this.ordenarLivros(listaEmFiltragem, filtro.ordenar))
    })
  }

  atualizarFiltroEditora(filtroEditora:string){
    this.apiService.getLivros().subscribe((res:any) => {
        this.livros$.next(res.filter((livro:Livro)=>{
          return livro.editora.indexOf(filtroEditora) != -1
        }))
    })
  }
  atualizarFiltroAutor(filtroAutor:string){
    this.apiService.getLivros().subscribe((res:any) => {
        this.livros$.next(res.filter((livro:Livro)=>{
          return livro.autores.filter((autor:Autor)=>autor.nome.indexOf(filtroAutor) != -1).length > 0
        }))
    })
  }

  atualizarFiltroPelaInicial(letraFiltro:string){
    this.apiService.getLivros().subscribe((res:any) => {
      if(letraFiltro == '#'){
        this.livros$.next(res)
      }else{
        this.livros$.next(res.filter((livro:Livro)=>{
          return livro.titulo[0].toUpperCase()==letraFiltro
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

  ordenarLivros(lista:any, tipoOrdenacao:string){
    
    switch (tipoOrdenacao) {
      case "Normal":
        return lista
      case "Recentes":
        return this.ordenarPorMaisVelhos(lista)
      case "Antigos":
        return this.ordenarPorMaisVelhos(lista).reverse()
      case "A-Z":
        return this.ordenarPorAlfabeto(lista)
      case "Z-A":
        return this.ordenarPorAlfabeto(lista).reverse()
    }
  }

  ordenarPorMaisVelhos(livros:Livro[]){
    return livros.sort((l1: any, l2: any) => {
      return l1.criado_em.localeCompare(l2.criado_em);
    });
  }
  ordenarPorAlfabeto(livros:Livro[]){
    return livros.sort((l1: any, l2: any) => {
      return l1.titulo.toUpperCase() < l2.titulo.toUpperCase() ? -1 : l1.titulo.toUpperCase() > l2.titulo.toUpperCase() ? 1 : 0;
    });
  }

}
