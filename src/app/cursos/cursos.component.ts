import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})


export class CursosComponent {

  cursos: string [];
  valorAtual = '';
  nomeDoCurso: string;

  onKeyUp(evento: KeyboardEvent) {
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  constructor(private cursosService: CursosService) {

      this.cursos = this.cursosService.getCursos();
  }
}
