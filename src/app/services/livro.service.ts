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

}
