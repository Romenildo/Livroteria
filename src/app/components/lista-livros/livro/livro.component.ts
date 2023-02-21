import { Component, Input } from '@angular/core';
import { Livro } from 'src/app/model/livro.model';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent {

  @Input() livro?:Livro;
  mostrarDetalhe:boolean = false;

  mostrarDetalhes(){
    this.mostrarDetalhe = !this.mostrarDetalhe;
  }
}
