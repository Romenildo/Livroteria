import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Filtro } from 'src/app/model/filtro.model';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {

  opcaoOrdenar = ['Normal','Recentes','Antigos', 'A-Z', 'Z-A']
  constructor(private livroService: LivroService){}

  filtrar(form: NgForm){
    console.log(form.value)
    const filtro = this.setarValorPadraoForm(form.value);
    this.livroService.atualizarFiltroBuscaAvancada(filtro)
  }

  setarValorPadraoForm(filtro:Filtro){
    if(filtro.anoMax.toString()=="")filtro.anoMax = 2023
    if(filtro.anoMin.toString()=="")filtro.anoMin = 1900
    if(filtro.edicaoMax.toString()=="")filtro.edicaoMax = 20
    if(filtro.edicaoMin.toString()=="")filtro.edicaoMin = 0
    if(filtro.qtPagMax.toString()=="")filtro.qtPagMax = 10000
    if(filtro.qtPagMin.toString()=="")filtro.qtPagMin = 0
    if(filtro.ordenar=="")filtro.ordenar = "Normal"

    return filtro
  }
}
