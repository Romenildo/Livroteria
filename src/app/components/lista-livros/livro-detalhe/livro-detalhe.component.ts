import { Component, Output, Input, EventEmitter } from '@angular/core';
import { AlertaService } from 'src/app/services/alerta.service';
import { ApiService } from 'src/app/services/api.service';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livro-detalhe',
  templateUrl: './livro-detalhe.component.html',
  styleUrls: ['./livro-detalhe.component.scss']
})
export class LivroDetalheComponent {
  @Input() livroDetalhe: any;
  @Output('onClose') fecharEmitter: EventEmitter<string> = new EventEmitter();
  @Output('onEdit') editEmitter: EventEmitter<string> = new EventEmitter();

  constructor(
    private livroService: LivroService,
    private apiService: ApiService,
    private alertaService: AlertaService
  ) { }

  deletarLivro() {
    this.apiService.deletarLivro(this.livroDetalhe?.id).subscribe(
      {
        next: (res) => {
          this.livroService.livros$.next(
            this.livroService.livros$.value.filter(l => l.id !== this.livroDetalhe.id)
          )
          this.alertaService.mostrarAlerta("Deletado com sucesso!")
        },
        error: err => this.alertaService.mostrarAlerta("Erro ao deletar o Livro!", true)
      }
    )
  }

  fecharDetalhe() {
    this.fecharEmitter.emit('fechar')
  }

  abrirEdit() {
    this.editEmitter.emit('abrir')
  }
}
