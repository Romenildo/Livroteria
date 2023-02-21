import { Component } from '@angular/core';
import { Livro } from 'src/app/model/livro.model';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-recentes',
  templateUrl: './lista-recentes.component.html',
  styleUrls: ['./lista-recentes.component.scss']
})
export class ListaRecentesComponent {

  constructor(private livroService: LivroService) {}
  
  livrosRecentes:Livro[] = []

  ngOnInit(): void {
    this.livroService.getLivros().subscribe(
      {
        next: (res:any) => {
          console.log("recentes")
          console.log(res)
          this.livrosRecentes = res.sort((l1:any,l2:any)=>{ 
            return l1.criado_em.localeCompare(l2.criado_em);
          })
          
          if(this.livrosRecentes.length > 5){
            this.livrosRecentes = this.livrosRecentes.slice(-5).reverse()
          }
          console.log(this.livrosRecentes)
        },
        error: err => alert("Erro na Requisicao com o servidor!")
      }
    )
  }
}
