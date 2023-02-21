import { Component } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private livroService: LivroService){}

  filtrar(filtro:string){
   this.livroService.atualizarFiltroBusca(filtro)
  }
}
