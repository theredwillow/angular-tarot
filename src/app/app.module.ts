import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleInputComponent } from './title-input/title-input.component';
import { PositionsInputComponent } from './positions-input/positions-input.component';
import { CardFlipperComponent } from './card-flipper/card-flipper.component';

@NgModule({
  declarations: [AppComponent, TitleInputComponent, PositionsInputComponent, CardFlipperComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
