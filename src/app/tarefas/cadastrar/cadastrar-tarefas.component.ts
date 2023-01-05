import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TarefaService } from './../shared/tarefa.service';
import { Tarefa } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefas',
  templateUrl: './cadastrar-tarefas.component.html',
  styleUrls: ['./cadastrar-tarefas.component.css']
})
export class CadastrarTarefasComponent {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa:Tarefa;

  constructor(
    private TarefaService: TarefaService,
    private router: Router
  ){ }

  ngOnInit() {
    this.tarefa = new Tarefa()
  }

  cadastrar(): void{
    if (this.formTarefa.form.valid){
      this.TarefaService.cadastrar(this.tarefa)
      console.log(this.tarefa);
      this.router.navigate(['/tarefas'])

    }
  }
}
