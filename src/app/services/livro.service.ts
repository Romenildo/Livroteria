import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from '../model/livro.model';
@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient) { }

  cadastrarLivro(livro: Livro){
    console.log(livro)
    return this.http.post(`${environment.API_URL}/Livro`, livro)
  }

  atualizarLivro(id: string, livro: Livro) {
    return this.http.put(`${environment.API_URL}/Livro/${id}`, livro);
  }

  deletarLivro(id: string){
    return this.http.delete(`${environment.API_URL}/Livro/${id}`);
  }

  getLivros(): Observable<Livro> {
    return this.http.get<Livro>(`${environment.API_URL}/Livro`);
  }
}
