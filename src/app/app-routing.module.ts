import { RouterModule, Routes } from '@angular/router';

import { LandPageComponent } from './components/visitor/land-page/land-page.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/visitor/page-not-found/page-not-found.component';
import { RegisterLetterComponent } from './components/teacher/register-letter/register-letter.component';

const routes: Routes = [
  { path: 'inicio', component: LandPageComponent },
  { path: 'professor/cadastrar-carta', component: RegisterLetterComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
