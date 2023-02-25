import { Component } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-filtro-letras',
  templateUrl: './filtro-letras.component.html',
  styleUrls: ['./filtro-letras.component.scss']
})
export class FiltroLetrasComponent {

  letras:string[] = ['#','A','B','C','D','E','F','G','H','I',
                     'J','K','L','M','N','O','P','Q',
                     'R','S','T','U','V','W','X','Y','Z']

  constructor(private livroService: LivroService){}

  filtrarPelaInicial(letrainicialFiltro:string){
    this.livroService.atualizarFiltroPelaInicial(letrainicialFiltro)
  }
}
