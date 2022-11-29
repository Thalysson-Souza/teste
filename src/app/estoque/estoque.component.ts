import { Component, OnInit } from '@angular/core';
import { Estoque } from './estoque.interface';
import { EstoqueService } from './estoque.service';

@Component({
  selector: 'estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  estoques: Estoque[] = [];

  constructor(private estoqueService: EstoqueService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.estoqueService.getEstoques().subscribe(
      (estoques) => {
        this.estoques = estoques;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  remove(estoque: Estoque) {
    this.estoqueService.remove(estoque).subscribe(
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
