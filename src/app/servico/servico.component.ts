import { Component, OnInit } from '@angular/core';
import { Servico } from './servico.interface';
import { ServicoService } from './servico.service';

@Component({
  selector: 'servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {
  servicos: Servico[] = [];

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.servicoService.getServicos().subscribe(
      (servicos) => {
        this.servicos = servicos;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  remove(servicos: Servico) {
    this.servicoService.remove(servicos).subscribe(
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
