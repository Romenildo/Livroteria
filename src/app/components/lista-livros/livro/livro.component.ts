import { Component, Input } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent {

  @Input() livro: any;
  mostrarDetalhe: boolean = false;
  mostrarEdit: boolean = false;

  constructor(private livroService: LivroService) { }


  filtrarPorAutor(filtro: string) {
    this.livroService.atualizarFiltroAutor(filtro)
  }
  filtrarPorEditora(filtro: string) {
    this.livroService.atualizarFiltroEditora(filtro)
  }

  mostrarTelaDetalhes() {
    this.mostrarDetalhe = !this.mostrarDetalhe;
  }

  mostrarTelaEdit() {
    this.mostrarEdit = !this.mostrarEdit;
  }
}
