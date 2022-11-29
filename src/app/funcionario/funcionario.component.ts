import { Component, OnInit } from '@angular/core';
import { Funcionario } from './funcionario.interface';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.funcionarioService.getFuncionarios().subscribe(
      (servicos) => {
        this.funcionarios = servicos;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  remove(funcionario: Funcionario) {
    this.funcionarioService.remove(funcionario).subscribe(
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
