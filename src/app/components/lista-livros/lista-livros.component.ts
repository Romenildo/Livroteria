import { Component, OnInit} from '@angular/core';
import { Livro } from 'src/app/model/livro.model';
import { Autor } from 'src/app/model/autor.model';
import { LivroService } from 'src/app/services/livro.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.scss']
})
export class ListaLivrosComponent implements OnInit {
  livros:Livro[] = []

  page: number = 1;
  count: number = 0;
  tableSize: number = 12;
  
  constructor(
    private livroService: LivroService,
    private apiService: ApiService
    ) {}

  ngOnInit(): void {
    this.livroService.livros$.subscribe(livros => this.livros = livros)

    this.apiService.getLivros().subscribe({
      next: (res:any)=> this.livroService.livros$.next(res),
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }


}
