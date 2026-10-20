
import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Pessoa } from './pessoa/pessoa';
import { Padrao } from './padrao/padrao';
import { NaoEncontrada } from './nao-encontrada/nao-encontrada';
import { CadastroEvento } from './cadastro-evento/cadastro-evento';
import { EmpresaComponent } from './empresa/empresa';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'pessoa', component: Pessoa },
  { path: 'padrao', component: Padrao },
  { path: 'eventos/novo', component: CadastroEvento },
  { path: 'empresa', component: EmpresaComponent },

  // A rota curinga precisa ser sempre a última.
  { path: '**', component: NaoEncontrada }
];
