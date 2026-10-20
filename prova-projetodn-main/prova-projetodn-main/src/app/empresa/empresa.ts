
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empresa.html',
  styleUrl: './empresa.css'
})
export class EmpresaComponent {
  empresa = {
    nome: '',
    cnpj: '',
    logomarca: '',
    fundacao: '',
    descricao: ''
  };

  enviar(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    console.log('Dados da empresa:', this.empresa);

    alert('Dados da empresa enviados com sucesso!');
  }

  limpar(form: NgForm): void {
    form.resetForm({
      nome: '',
      cnpj: '',
      logomarca: '',
      fundacao: '',
      descricao: ''
    });
  }
}
