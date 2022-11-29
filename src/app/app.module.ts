import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DataHoraComponent } from './data-hora/data-hora.component';
import '@angular/common/locales/global/pt';
import { LivrosComponent } from './livros/livros.component';
import { HttpClientModule } from '@angular/common/http';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';
import { Route, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PessoaComponent } from './pessoa/pessoa.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { PetComponent } from './pet/pet.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { ServicoComponent } from './servico/servico.component';
import { HomeComponent } from './home/home.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PetCadastroComponent } from './pet-cadastro/pet-cadastro.component';
import { EstoqueCadastroComponent } from './estoque-cadastro/estoque-cadastro.component';
import { ServicoCadastroComponent } from './servico-cadastro/servico-cadastro.component';
import { FuncionarioCadastroComponent } from './funcionario-cadastro/funcionario-cadastro.component';

const routes: Route[] = [
  {
    path: 'pessoa',
    component: PessoaComponent
  },
  {
    path: 'funcionario',
    component: FuncionarioComponent
  },
  {
    path: 'pet',
    component: PetComponent
  },
  {
    path: 'estoque',
    component: EstoqueComponent
  },
  {
    path: 'servico',
    component: ServicoComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pessoa/cadastro_pessoa',
    component: PessoaCadastroComponent
  },
  {
    path: 'pessoa/edicao_pessoa/:id',
    component: PessoaCadastroComponent
  },
  {
    path: 'pet/cadastro_pet',
    component: PetCadastroComponent
  },
  {
    path: 'pet/edicao_pet/:id',
    component: PetCadastroComponent
  },
  {
    path: 'estoque/cadastro_estoque',
    component: EstoqueCadastroComponent
  },
  {
    path: 'estoque/edicao_estoque/:id',
    component: EstoqueCadastroComponent
  },
  {
    path: 'servico/cadastro_servico',
    component: ServicoCadastroComponent
  },
  {
    path: 'servico/edicao_servico/:id',
    component: ServicoCadastroComponent
  },
  {
    path: 'funcionario/cadastro_funcionario',
    component: FuncionarioCadastroComponent
  },
  {
    path: 'funcionario/edicao_funcionario/:id',
    component: FuncionarioCadastroComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  },
]


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DataHoraComponent,
    LivrosComponent,
    LivrosCadastroComponent,
    PessoaComponent,
    FuncionarioComponent,
    PetComponent,
    EstoqueComponent,
    ServicoComponent,
    HomeComponent,
    PessoaCadastroComponent,
    PetCadastroComponent,
    EstoqueCadastroComponent,
    ServicoCadastroComponent,
    FuncionarioCadastroComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
