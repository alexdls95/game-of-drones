import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Material Angular
import { MaterialModule } from './material.module';  // Todos los demás imports de Material Angular
import 'hammerjs';  // Para gestos táctiles
import { PlayerComponent } from './auth/login.component';
import { MoveSelectorComponent } from './game/move-selector.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    MoveSelectorComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
