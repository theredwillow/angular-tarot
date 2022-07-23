import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleInputComponent } from './title-input/title-input.component';
import { PositionsInputComponent } from './positions-input/positions-input.component';
import { CardFlipperComponent } from './card-flipper/card-flipper.component';
import { SpreadReducer } from './store/reducers/spread.reducer';
import { StepReducer } from './store/reducers/step.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent, TitleInputComponent, PositionsInputComponent, CardFlipperComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      step: StepReducer,
      spread: SpreadReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
