import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms'
import { Autor } from 'src/app/model/autor.model';
import { Livro } from 'src/app/model/livro.model';
import { AlertaService } from 'src/app/services/alerta.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  imagemPreview:string = ""; 
  @ViewChild('f')cadastroForm!:NgForm;

  constructor(
    private apiService: ApiService,
    private alertaService: AlertaService
  ){}

  cadastrarLivro(form: NgForm){
    const livro = this.tratarDadosForm(form.value);

    this.apiService.cadastrarLivro(livro).subscribe(
      {
        next: res => {
          this.alertaService.mostrarAlerta("Cadastrado com Sucesso!")
          this.atualizarImagemPreview("https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png")
          this.cadastroForm.reset()
        },
        error: err => {
          const mensagemErro = err.error?.split("\r\n")[0].split(":")[1]
          this.alertaService.mostrarAlerta("Erro: "+ mensagemErro + " !", true)
        }
      }
    )
  }
  
  
  tratarDadosForm(form:Livro){
    if(this.imagemPreview == "" || this.imagemPreview .indexOf("http") < 0){
      form.imagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    }else{
      form.imagem = this.imagemPreview 
    }

    if(form.edicao == null || form.edicao.toString() == ""){
      form.edicao = 0
    }
    form.autores = this.separarAutores(form.autor)

    return form
  }

  separarAutores(stringAutores:string){
    const autores:Autor[]= [];
    stringAutores.split(';').forEach((autor:string) => {
      autores.push({nome: autor})
    });
    return autores;
  }

  atualizarImagemPreview(imagem:string){
    if(this.cadastroForm.value.imagem == "" || this.cadastroForm.value.imagem.indexOf("http") < 0){
      this.imagemPreview  = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    }else{
      this.imagemPreview = imagem
    }
  }
}
