import { Component } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  letras:string[] = ['#','A','B','C','D','E','F','G','H','I',
                     'J','K','L','M','N','O','P','Q',
                     'R','S','T','U','V','W','X','Y','Z']

  constructor(private livroService: LivroService){}

  filtrar(filtro:string){
   this.livroService.atualizarFiltroBusca(filtro)
  }

  filtrarPelaInicial(letrainicialFiltro:string){
    this.livroService.atualizarFiltroPelaInicial(letrainicialFiltro)
  }
}
