import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa/pessoa.interface';
import { PessoaService } from '../pessoa/pessoa.service';
import { Funcionario } from './funcionario.interface';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  pessoas: Pessoa[] = [];
  temp: string = '';

  constructor(
    private funcionarioService: FuncionarioService,
    private pessoaService: PessoaService
  ) { }

  ngOnInit(): void {
    this.list();
    this.listPessoas();
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

  listPessoas() {
    this.pessoaService.getPessoas().subscribe(
      (pessoas) => {
        this.pessoas = pessoas;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  getNomePessoa({ id_pessoa }: Funcionario): string {
    let temp = this.pessoas.filter(i => i.id === id_pessoa);
    if (temp.length === 0) {
      return 'Pessoa não existe'
    } else {
      return `${temp[0].nome} ${temp[0].sobrenome}`
    }
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
