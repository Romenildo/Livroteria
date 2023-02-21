import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  quantLivros:number = 0
  
  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.livroService.livros$.subscribe(livros => this.quantLivros= livros.length)
  }
}
