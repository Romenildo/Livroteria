import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivroService } from 'src/app/services/livro.service';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent{

  @Input() livroEdit: any;
  imagemView:string = '';
  livroForm: FormGroup;
  @Output('onClose') fecharEmitter: EventEmitter<string> = new EventEmitter();


  ngOnInit(): void {
    this.updateForm()
  }


  constructor(
    private fb: FormBuilder,
    private livroService: LivroService
  ) {
    this.livroForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.maxLength(100)]],
      subTitulo: ['', [Validators.maxLength(100)]],
      edicao: ['', []],
      quantPaginas: ['', []],
      dataPublicacao: ['', [Validators.required]],
      editora: ['', [Validators.required, Validators.maxLength(150)]],
      autor: ['', [Validators.required]],
      resumo: ['', [Validators.maxLength(500)]],
      imagem: [''],
    })
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

  atualizarItem() {
    if (this.livroForm.valid) {
      console.log(this.livroForm.value)
      if(this.livroForm.value.imagem == '' || this.livroForm.value.imagem.indexOf("http") < 0){
        this.livroForm.value.imagem = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
      }else{
        this.livroForm.value.imagem = this.imagemView
      }
      if(this.livroForm.value.edicao == ''){
        this.livroForm.value.edicao = 0
      }
      this.livroForm.value.autores = this.getAutores(this.livroForm.value.autor)
      console.log(this.livroForm.value)
      this.livroService.atualizarLivro(this.livroEdit.id, this.livroForm.value)
        .subscribe((res) => {
          console.log("recebendo")
          console.log(res)
          const currentItems = this.livroService.livros$.getValue();
          const itemUpdate: any = currentItems.find(d => d.id == this.livroEdit.id)
          itemUpdate.titulo = this.livroForm.value.titulo;
          itemUpdate.subTitulo = this.livroForm.value.subTitulo;
          itemUpdate.edicao = this.livroForm.value.edicao;
          itemUpdate.quantPaginas = this.livroForm.value.quantPaginas;
          itemUpdate.dataPublicacao = this.livroForm.value.dataPublicacao;
          itemUpdate.autores = this.getAutores(this.livroForm.value.autor)
          itemUpdate.editora = this.livroForm.value.editora;
          itemUpdate.imagem = this.livroForm.value.imagem;
          this.imagemView = this.livroForm.value.imagem
          alert("atualizado")
          this.fecharEdit()
        }, error => {
          alert(error.error.split('\r')[0]);
        });
    } else {
      alert("Verifique os campos obrigatórios!");
    }
  }

  updateForm() {
    this.livroForm = this.fb.group({
      titulo: [this.livroEdit.titulo, [Validators.required, Validators.maxLength(100)]],
      subTitulo: [this.livroEdit.subTitulo, [Validators.maxLength(100)]],
      //edicao: [this.livroEdit.edicao, [Validators.pattern('(^[0-9]{1,6}$)')]],
      edicao: [this.livroEdit.edicao, []],
      quantPaginas: [this.livroEdit.quantPaginas, []],
      dataPublicacao: [this.livroEdit.dataPublicacao, [Validators.required]],
      editora: [this.livroEdit.editora, [Validators.required, Validators.maxLength(150)]],
      autor: [this.formatarAutor(this.livroEdit.autores), [Validators.required]],
      resumo: [this.livroEdit.resumo, [Validators.maxLength(500)]],
      imagem: [this.livroEdit.imagem],
    })
    this.atualizarImagemView(this.livroForm.value.imagem)
  }

  formatarAutor(autores:any[]){
    let autorString:any = ""
    for(let autor of autores){
      autorString+= autor.nome + ";"
    }
    return autorString.slice(0, -1)
  }

  getAutores(livroAutores:string){
    const autores:{ nome:string }[]= [];
    livroAutores.split(';').forEach((autor:string) => {
      autores.push({nome: autor})
    });
    return autores;
  }
  atualizarImagemView(imagem:string){
    this.imagemView = imagem
  }
  fecharEdit(){
    this.fecharEmitter.emit('fechar')
  }
}
