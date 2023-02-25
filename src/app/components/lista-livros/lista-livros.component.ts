import { Component, OnInit, Input} from '@angular/core';
import { Livro } from 'src/app/model/livro.model';
import { LivroService } from 'src/app/services/livro.service';
import { ApiService } from 'src/app/services/api.service';
import { style, animate,transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.scss'],
  animations: [
    trigger('list', [
      transition(':enter', [
        style({ opacity: 0, transform: "translateX(-100%)" }),
        animate(
          "400ms ease-in-out",
          style({ opacity: 1, transform: "translateX(0)" })
        )
      ]),   
    ])
  ]
})

export class ListaLivrosComponent implements OnInit {
  livros:Livro[] = []
  @Input() modoLista?: string;
  page: number = 1;
  count: number = 0;
  tableSize: number =12;
  
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

  mudarModoVisualizacao(){
    if(this.modoLista=="flat"){
      return 'lista-livros-flat'
    }
    return 'lista-livros'
  }
  onTableDataChange(event: any) {
    this.page = event;
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }


}
