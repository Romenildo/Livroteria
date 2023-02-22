import { Component, Input } from '@angular/core';
import { Livro } from 'src/app/model/livro.model';

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
    console.log("mostrando "+ this.mostrarEdit)
    this.mostrarEdit = !this.mostrarEdit;
  }
}
