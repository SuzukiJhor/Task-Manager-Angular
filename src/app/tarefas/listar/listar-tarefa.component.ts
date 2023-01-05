import { Component } from '@angular/core';
import { Tarefa } from '../shared';

import { TarefaService } from './../shared/tarefa.service';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent {

    tarefas: Tarefa[];

    constructor( private tarefaService: TarefaService){}

    ngOnInit() {
      this.tarefas = this.listarTodos()
      this.tarefas = [
        new Tarefa(1, 'angular', false),
        new Tarefa(1, 'angular2', true)
      ]
    }

    listarTodos(): Tarefa[] {
      return this.tarefaService.listarTodos()
    }

}
