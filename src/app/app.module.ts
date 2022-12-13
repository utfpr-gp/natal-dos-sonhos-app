import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandPageComponent } from './components/visitor/land-page/land-page.component';
import { MenuComponent } from './layout/menu/menu.component';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { PageNotFoundComponent } from './components/visitor/page-not-found/page-not-found.component';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ChristmasCountdownComponent } from './components/visitor/christmas-countdown/christmas-countdown.component';
import { LettersCardListComponent } from './components/visitor/letters-card-list/letters-card-list.component';
import { LetterPageComponent } from './components/visitor/letter-page/letter-page/letter-page.component';
import { LoginComponent } from './components/visitor/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SignUpComponent } from './components/visitor/sign-up/sign-up.component';
import { AdminHomeComponent } from './components/administrator/admin-home/admin-home.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { ClassesComponent } from './components/administrator/classes/classes.component';

registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LandPageComponent,
    PageNotFoundComponent,
    ChristmasCountdownComponent,
    LettersCardListComponent,
    LetterPageComponent,
    LoginComponent,
    SignUpComponent,
    AdminHomeComponent,
    ClassesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
