import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/model/livro.model';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  quantLivros: number = 0;
  modoLista:string = 'flat';

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.livroService.livros$.subscribe(
      (livros:Livro[]) => (this.quantLivros = livros.length)
    );
  }

  
}
