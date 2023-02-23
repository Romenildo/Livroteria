import { Component } from '@angular/core';
import { Livro } from 'src/app/model/livro.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lista-recentes',
  templateUrl: './lista-recentes.component.html',
  styleUrls: ['./lista-recentes.component.scss'],
})
export class ListaRecentesComponent {
  constructor(
    private apiService: ApiService
  ) { }

  livrosRecentes: Livro[] = [];

  ngOnInit(): void {
    this.apiService.getLivros().subscribe({
      next: (res: any) => {
        
        this.livrosRecentes = this.ordenarPorMaisRecente(res);

        if (this.livrosRecentes.length > 5) {
          this.livrosRecentes = this.livrosRecentes.slice(-5).reverse();
        }
      },
    });
  }

  ordenarPorMaisRecente(livros:Livro[]){
    return livros.sort((l1: any, l2: any) => {
      return l1.criado_em.localeCompare(l2.criado_em);
    });
  }
}
