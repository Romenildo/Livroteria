import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Livro } from 'src/app/model/livro.model';
import { ApiService } from 'src/app/services/api.service';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent {
  imagemView: string = '';
  livroForm: FormGroup;
  @Input() livroEdit: any;
  @Output('onClose') fecharEmitter: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.setarValoresDoLivroAtual()
  }

  constructor(
    private fb: FormBuilder,
    private livroService: LivroService,
    private apiService: ApiService
  ) {
    this.livroForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.maxLength(100)]],
      subTitulo: ['', [Validators.maxLength(100)]],
      edicao: ['', [Validators.min(0), Validators.max(20)]],
      quantPaginas: ['', [Validators.min(0), Validators.max(10000)]],
      dataPublicacao: ['', [Validators.required]],
      editora: ['', [Validators.required, Validators.maxLength(150)]],
      autor: ['', [Validators.required]],
      resumo: ['', [Validators.maxLength(500)]],
      imagem: [''],
    })
  }

  atualizarItem() {
    if (this.livroForm.valid) {
      const livro = this.tratarDadosForm(this.livroForm.value)
  
      this.apiService.atualizarLivro(this.livroEdit.id, livro)
        .subscribe({
          next: res => {
            const currentItems = this.livroService.livros$.getValue();
                const itemUpdate: any = currentItems.find(l => l.id == this.livroEdit.id)
                itemUpdate.titulo = this.livroForm.value.titulo;
                itemUpdate.subTitulo = this.livroForm.value.subTitulo;
                itemUpdate.edicao = this.livroForm.value.edicao;
                itemUpdate.quantPaginas = this.livroForm.value.quantPaginas;
                itemUpdate.dataPublicacao = this.livroForm.value.dataPublicacao;
                itemUpdate.autores = this.separarAutores(this.livroForm.value.autor)
                itemUpdate.editora = this.livroForm.value.editora;
                itemUpdate.imagem = this.livroForm.value.imagem;
                itemUpdate.resumo = this.livroForm.value.resumo;
                this.imagemView = this.livroForm.value.imagem
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

  fecharTelaEdit() {
    this.fecharEmitter.emit('fechar')
  }

  setarValoresDoLivroAtual() {
    this.livroForm = this.fb.group({
      titulo: [this.livroEdit.titulo, [Validators.required, Validators.maxLength(100)]],
      subTitulo: [this.livroEdit.subTitulo, [Validators.maxLength(100)]],
      edicao: [this.livroEdit.edicao, [Validators.min(0), Validators.max(20)]],
      quantPaginas: [this.livroEdit.quantPaginas, [Validators.min(0), Validators.max(10000)]],
      dataPublicacao: [this.livroEdit.dataPublicacao, [Validators.required]],
      editora: [this.livroEdit.editora, [Validators.required, Validators.maxLength(150)]],
      autor: [this.juntarAutor(this.livroEdit.autores), [Validators.required]],
      resumo: [this.livroEdit.resumo, [Validators.maxLength(500)]],
      imagem: [this.livroEdit.imagem],
    })
    this.atualizarImagemView(this.livroForm.value.imagem)
  }

  get titulo() {
    return this.livroForm.get('titulo');
  }
  get subTitulo() {
    return this.livroForm.get('subTitulo');
  }
  get edicao() {
    return this.livroForm.get('edicao');
  }
  get quantPaginas() {
    return this.livroForm.get('quantPaginas');
  }
  get dataPublicacao() {
    return this.livroForm.get('dataPublicacao');
  }
  get editora() {
    return this.livroForm.get('editora');
  }
  get autor() {
    return this.livroForm.get('autor');
  }
}
