import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
