import { Component, Output, Input, EventEmitter, ViewChild, AfterViewInit, OnInit,AfterContentInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Livro } from 'src/app/model/livro.model';
import { ApiService } from 'src/app/services/api.service';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit{
  imagemView: string = '';
  @ViewChild('f')editarForm!:NgForm;
  @Input() livroEdit: any;
  @Output('onClose') fecharEmitter: EventEmitter<string> = new EventEmitter();


  constructor(
    private livroService: LivroService,
    private apiService: ApiService
  ) {}
  
  ngOnInit(): void {
    setTimeout(() => {
      this.editarForm.setValue({
        titulo:this.livroEdit.titulo,
        subTitulo:this.livroEdit.subTitulo,
        edicao:this.livroEdit.edicao,
        autor:this.juntarAutor(this.livroEdit.autores),
        editora:this.livroEdit.editora,
        quantPaginas:this.livroEdit.quantPaginas,
        dataPublicacao:this.formatarData(this.livroEdit.dataPublicacao),
        resumo:this.livroEdit.resumo,
        imagem:this.livroEdit.imagem
      })
      this.atualizarImagemView(this.livroEdit.imagem)
    }, 10);
    
  }

  atualizarItem() {
    if (this.editarForm.valid) {
      const livro = this.tratarDadosForm(this.editarForm.value)
      this.apiService.atualizarLivro(this.livroEdit.id, livro)
        .subscribe({
          next: res => {
            const currentItems = this.livroService.livros$.getValue();
                const itemUpdate: any = currentItems.find(l => l.id == this.livroEdit.id)
                itemUpdate.titulo = this.editarForm.value.titulo;
                itemUpdate.subTitulo = this.editarForm.value.subTitulo;
                itemUpdate.edicao = this.editarForm.value.edicao;
                itemUpdate.quantPaginas = this.editarForm.value.quantPaginas;
                itemUpdate.dataPublicacao = this.editarForm.value.dataPublicacao;
                itemUpdate.autores = this.separarAutores(this.editarForm.value.autor)
                itemUpdate.editora = this.editarForm.value.editora;
                itemUpdate.imagem = this.editarForm.value.imagem;
                itemUpdate.resumo = this.editarForm.value.resumo;
                this.imagemView = this.editarForm.value.imagem
                this.fecharTelaEdit()
          },
          error: err => {
            try {
              const mensagemErro = err.error.split("\r\n")[0].split(":")[1]
              alert("Erro: "+ mensagemErro + " !")
            } catch (error) {
              alert("Erro no Servidor ao Editar!")
              console.log(error)
            }
          }
        });
    } else {
      alert("Verifique os campos obrigatórios!");
    }
  }

  tratarDadosForm(form:Livro){
    if (form.imagem == '' || form.imagem.indexOf("http") < 0) {
      form.imagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    } else {
      form.imagem = this.imagemView
    }
    if (form.edicao.toString() == '') {
      form.edicao = 0
    }
    form.autores = this.separarAutores(form.autor)
    return form
  }

  separarAutores(livroAutores: string) {
    const autores: { nome: string }[] = [];
    livroAutores.split(';').forEach((autor: string) => {
      autores.push({ nome: autor })
    });
    return autores;
  }

  juntarAutor(autores: any[]) {
    let autorString: any = ""
    for (let autor of autores) {
      autorString += autor.nome + ";"
    }
    return autorString.slice(0, -1)
  }

  atualizarImagemView(imagem: string) {
    this.imagemView = imagem
  }

  formatarData(data:string){
    const [dia, mes, ano] = data.split('/');
    return`${ano}-${mes}-${dia}`;
  }

  fecharTelaEdit() {
    this.fecharEmitter.emit('fechar')
  }
}
