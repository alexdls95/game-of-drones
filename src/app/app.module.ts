import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Material Angular
import { MaterialModule } from './material.module';  // Todos los demás imports de Material Angular
import 'hammerjs';  // Para gestos táctiles
import { LoginComponent } from './auth/login.component';
import { GameComponent } from './game/game.component';
import { Routing } from './app.routing';
import { WinnerComponent } from './win/winner.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameComponent,
    WinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
