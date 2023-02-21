import { Component } from '@angular/core';
import {NgForm } from '@angular/forms'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  imagemView:string = "";

  cadastrarLivro(form: NgForm, imagem:string){
    const livro = form.value;
    imagem != ''?livro.imagem = imagem:livro.imagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    
  }

  atualizarImagem(imagem:string){
    this.imagemView = imagem
  }
}
