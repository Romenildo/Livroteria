import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Autor } from 'src/app/model/autor.model';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent  implements OnInit {

  constructor(private livroService: LivroService){}
  imagemView:string = "";


  ngOnInit(): void {
  }
  
  cadastrarLivro(form: NgForm, imagem:string){
    const livro = form.value;
    
    if(imagem != '' || imagem.indexOf("http") != -1){
      livro.imagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    }else{
      livro.imagem = imagem
    }
    if(livro.edicao == ''){
      livro.edicao = 0
    }
    livro.autores = this.getAutores(livro.autor)
    
    this.livroService.cadastrarLivro(livro).subscribe(
      {
        next: res => {
          console.log(res)
          alert("Cadastrado com Sucesso!")
          location.reload()
        },
        error: err => {
          try {
            const mensagemErro = err.error.split("\r\n")[0].split(":")[1]
            alert("Erro: "+ mensagemErro + " !")
          } catch (error) {
            alert("Erro no Servidor!")
            console.log(error)
          }
          
        }
      }
    )
  }
  
  atualizarImagemView(imagem:string){
    this.imagemView = imagem
  }

  getAutores(livroAutores:string){
    const autores:{ nome:string }[]= [];
    livroAutores.split(';').forEach((autor:string) => {
      autores.push({nome: autor})
    });
    return autores;
  }
}
