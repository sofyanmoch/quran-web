import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardAyatComponent } from './components/card-ayat/card-ayat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    CardAyatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
