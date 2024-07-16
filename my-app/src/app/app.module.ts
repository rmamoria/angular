import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeyConceptsComponent } from './components/key-concepts/key-concepts.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ServiceComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    KeyConceptsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
