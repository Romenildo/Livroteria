import { Component, Output, Input, EventEmitter  } from '@angular/core';
import { Livro } from 'src/app/model/livro.model';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livro-detalhe',
  templateUrl: './livro-detalhe.component.html',
  styleUrls: ['./livro-detalhe.component.scss']
})
export class LivroDetalheComponent {
  @Input() livroDetalhe?:any;
  @Output('onClose') fecharEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private livroService:LivroService){}

  fecharDetalhe(){
    this.fecharEmitter.emit('close')
  }

  deletarLivro(){
    this.livroService.deletarLivro(this.livroDetalhe?.id).subscribe(
      {
        next: (res) => {
          this.livroService.livros$.next(
            this.livroService.livros$.value.filter(l => l.id !== this.livroDetalhe?.id)
          )
        },
        error: err => alert("Erro ao deletar o Livro!")
      }
    )
  }
}
