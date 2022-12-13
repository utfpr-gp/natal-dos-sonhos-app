import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LandPageComponent } from './components/visitor/land-page/land-page.component';
import { PageNotFoundComponent } from './components/visitor/page-not-found/page-not-found.component';
import { RegisterLetterComponent } from './components/teacher/register-letter/register-letter.component';
import { LetterPageComponent } from './components/visitor/letter-page/letter-page/letter-page.component';

const routes: Routes = [
  { path: 'inicio', component: LandPageComponent },
  { path: 'professor/cadastrar-carta', component: RegisterLetterComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: 'cartas/:id', component: LetterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
