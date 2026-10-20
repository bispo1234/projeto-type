import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evento } from '../models/evento';

import {
  validarTitulo,
  validarData,
  validarLocal,
  validarEmail,
  validarVagas
} from '../models/evento.validacao';

@Component({
  selector: 'app-cadastro-evento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-evento.html',
  styleUrl: './cadastro-evento.css'
})
export class CadastroEvento {
  formulario: Omit<Evento, 'id'> = {
    titulo: '',
    data: '',
    local: '',
    emailResponsavel: '',
    vagas: null
  };

  eventos: Evento[] = [];
  proximoId = 1;

  tocados = {
    titulo: false,
    data: false,
    local: false,
    emailResponsavel: false,
    vagas: false
  };

  get erros() {
    return {
      titulo: validarTitulo(this.formulario.titulo),
      data: validarData(this.formulario.data),
      local: validarLocal(this.formulario.local),
      emailResponsavel: validarEmail(this.formulario.emailResponsavel),
      vagas: validarVagas(this.formulario.vagas)
    };
  }

  get formularioInvalido(): boolean {
    return Object.values(this.erros).some(erro => erro !== null);
  }

  salvar(): void {
    if (this.formularioInvalido) return;

    const evento: Evento = {
      id: this.proximoId++,
      ...this.formulario
    };

    this.eventos = [...this.eventos, evento];

    this.formulario = {
      titulo: '',
      data: '',
      local: '',
      emailResponsavel: '',
      vagas: null
    };

    this.tocados = {
      titulo: false,
      data: false,
      local: false,
      emailResponsavel: false,
      vagas: false
    };
  }
}