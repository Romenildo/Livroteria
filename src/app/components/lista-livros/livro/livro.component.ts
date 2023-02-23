import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent {

  @Input() livro:any;
  mostrarDetalhe:boolean = false;
  mostrarEdit:boolean = false;

  mostrarTelaDetalhes(){
    this.mostrarDetalhe = !this.mostrarDetalhe;
  }

  mostrarTelaEdit(){
    this.mostrarEdit = !this.mostrarEdit;
  }
}
