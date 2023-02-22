import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {  BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from '../model/livro.model';
@Injectable({
  providedIn: 'root'
})
export class LivroService {

  public livros$: BehaviorSubject<Livro[]> = new BehaviorSubject<Livro[]>([]);

  constructor(private http: HttpClient) { }

  cadastrarLivro(livro: Livro){
    return this.http.post(`${environment.API_URL}/Livro`, livro)
  }

  atualizarLivro(id: string, livro: Livro) {
    return this.http.put(`${environment.API_URL}/Livro/${id}`, livro);
  }

  deletarLivro(id?: string){
    return this.http.delete(`${environment.API_URL}/Livro/${id}`);
  }

  getLivros(): Observable<Livro> {
    return this.http.get<Livro>(`${environment.API_URL}/Livro`);
  }

  atualizarFiltroBusca(filtro:string){
    this.getLivros().subscribe((res:any) => {
      if(filtro == ""){
        this.livros$.next(res)
      }else{
        this.livros$.next(res.filter((livro:any)=>{
          return this.filtragemBusca(livro, filtro)
        }))
        console.log(this.livros$.value)
      }
    })
  }

  filtragemBusca(livro:any, filtro:string){
    if(
         (livro.subTitulo.indexOf(filtro) != -1 )
      || (livro.titulo.indexOf(filtro) != -1) 
      || (livro.editora.indexOf(filtro) != -1) 
      || (livro.autores.filter((autor:any)=>autor.nome.indexOf(filtro) != -1).length > 0)
      ){
      return true
    }
    return false;
  }


  atualizarFiltroBuscaAvancada(filtro:any){
    this.getLivros().subscribe((res:any) => {
        this.livros$.next(res.filter((livro:any)=>{
          return this.filtragemBuscaAvancada(livro, filtro)
        }))

        if(filtro.titulo != ""){
          this.livros$.next(res.filter((livro:any)=>{
            return livro.titulo.indexOf(filtro.titulo) != -1
          }))
        }
        if(filtro.editora != ""){
          this.livros$.next(res.filter((livro:any)=>{
            return livro.editora.indexOf(filtro.editora) != -1
          }))
        }
        if(filtro.autor != ""){
          this.livros$.next(res.filter((livro:any)=>{
            return livro.autores.filter((autor:any)=>autor.nome.indexOf(filtro.autor) != -1).length > 0
          }))
        }
        
    })
  }
  filtragemBuscaAvancada(livro:any, filtro:any){
    console.log("aui")
    console.log(filtro)
    console.log(livro)
    console.log(livro.dataPublicacao.split("-")[0].split("/")[2])
    const anoPublicacao = livro.dataPublicacao.split("-")[0].split("/")[2]
    if(
         //(livro.titulo.indexOf(filtro.titulo) != -1 )
      //&& (livro.editora.indexOf(filtro.editora) != -1) 
       (anoPublicacao <= filtro.anoMax && anoPublicacao >= filtro.anoMin ) 
      && (livro.edicao <= filtro.edicaoMax && livro.edicao >= filtro.edicaoMin ) 
      && (livro.quantPaginas <= filtro.qtPagMax && livro.quantPaginas >= filtro.qtPagMin ) 
      //&& (livro.autores.filter((autor:any)=>autor.nome.indexOf(filtro.autor) != -1).length > 0)
      ){
        console.log(livro)
      return true
    }
    return false;
  }

}
