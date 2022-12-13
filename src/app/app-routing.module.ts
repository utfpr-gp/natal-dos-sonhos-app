import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LandPageComponent } from './components/visitor/land-page/land-page.component';
import { PageNotFoundComponent } from './components/visitor/page-not-found/page-not-found.component';
import { LetterPageComponent } from './components/visitor/letter-page/letter-page/letter-page.component';
import { LoginComponent } from './components/visitor/login/login.component';
import { SignUpComponent } from './components/visitor/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'inicio', component: LandPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastre-se', component: SignUpComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: 'cartas/:id', component: LetterPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
