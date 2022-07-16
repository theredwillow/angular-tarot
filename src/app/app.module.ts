import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepComponent } from './step/step.component';
import { SpreadComponent } from './spread/spread.component';
import { StoreModule } from '@ngrx/store';
import { stepReducer } from './step/step.reducer';

@NgModule({
  declarations: [AppComponent, StepComponent, SpreadComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      step: stepReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
