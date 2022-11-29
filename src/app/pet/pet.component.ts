import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa/pessoa.interface';
import { PessoaService } from '../pessoa/pessoa.service';
import { Pet } from './pet.interface';
import { PetService } from './pet.service';

@Component({
  selector: 'pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pets: Pet[] = [];
  pessoas: Pessoa[] = [];
  temp: string = '';

  constructor(
    private petService: PetService,
    private pessoaService: PessoaService
  ) { }

  ngOnInit(): void {
    this.list();
    this.listPessoas();
  }

  list() {
    this.petService.getPets().subscribe(
      (pets) => {
        this.pets = pets;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  remove(pet: Pet) {
    this.petService.remove(pet).subscribe(
      () => this.list(),
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

  getNomeDono({ id_dono }: Pet): string {
    let temp = this.pessoas.filter(i => i.id === id_dono);
    if (temp.length === 0) {
      return 'Dono não existe'
    } else {
      return `${temp[0].nome} ${temp[0].sobrenome}`
    }
  }

  // getNameDono({ id_dono }: Pet) {
  // getNameDono(id: number): any {
  //   // this.pessoaService.getPessoa(id_dono).subscribe(
  //   this.pessoaService.getPessoa(id).subscribe(
  //     (result) => {
  //       // console.log(`${result.nome} ${result.sobrenome}`)
  //       this.temp = `${result.nome} ${result.sobrenome}`
  //       return this.temp;
  //     },
  //     (erro) => {
  //       console.log('Erro: ', erro);
  //     },
  //     () => {
  //       console.log('Terminou!');
  //     }
  //   );
  // }

}
