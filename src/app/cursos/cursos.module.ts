import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CursosComponent } from './cursos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CursosComponent
  ],
  exports: [
    CursosComponent
  ],
  providers: [
    CursosService
  ]
})

export class CursosModule {}