import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos () {
    return ['Angular', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'VueJS', 'TypeScript'];
  }

}
