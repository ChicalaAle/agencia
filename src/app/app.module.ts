import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { WavesComponent } from './extras/waves/waves.component';
import { BodyComponent } from './components/body/body.component';
import { ServicesComponent } from './components/services/services.component';
import { ClientsComponent } from './components/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    WavesComponent,
    BodyComponent,
    ServicesComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
