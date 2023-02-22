import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {

  constructor(private livroService: LivroService){}

  filtrar(form: NgForm){
    const filtro = this.corrigirForm(form.value);
    console.log(filtro)
    this.livroService.atualizarFiltroBuscaAvancada(filtro)
    
  }

  corrigirForm(filtro:any){

    if(filtro.anoMax=="")filtro.anoMax = 2023
    if(filtro.anoMin=="")filtro.anoMin = 1900
    if(filtro.edicaoMax=="")filtro.edicaoMax = 20
    if(filtro.edicaoMin=="")filtro.edicaoMin = 0
    if(filtro.qtPagMax=="")filtro.qtPagMax = 20000
    if(filtro.qtPagMin=="")filtro.qtPagMin = 0

    return filtro
  }
}
