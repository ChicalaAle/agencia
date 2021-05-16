import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { WavesComponent } from './extras/waves/waves.component';
import { BodyComponent } from './components/body/body.component';
import { ServicesComponent } from './components/services/services.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    WavesComponent,
    BodyComponent,
    ServicesComponent,
    ClientsComponent,
    FooterComponent,
    ErrorComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    YouTubePlayerModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
