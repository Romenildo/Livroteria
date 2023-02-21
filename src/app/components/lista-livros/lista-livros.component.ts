import { Component, OnInit} from '@angular/core';
import { Livro } from 'src/app/model/livro.model';
import { Autor } from 'src/app/model/autor.model';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.scss']
})
export class ListaLivrosComponent implements OnInit {

  livros:Livro[] = []

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.livroService.getLivros().subscribe(
      {
        next: (res) => {
          console.log(res)
          this.livros = res as any
        },
        error: err => alert("Erro na Requisicao com o servidor!")
      }
    )
  }

  
}
