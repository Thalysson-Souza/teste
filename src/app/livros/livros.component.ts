import { Component, Inject, OnInit } from '@angular/core';
import { Livro } from './livro.interface';
import { LivroService } from './livro.service';

@Component({
  selector: 'livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css'],
})
export class LivrosComponent implements OnInit {
  livros: Livro[] = [];

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.livroService.getLivros().subscribe(
      (livros) => {
        this.livros = livros;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  remove(livro: Livro) {
    this.livroService.remove(livro).subscribe(
      () => this.list(),
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }


} 
