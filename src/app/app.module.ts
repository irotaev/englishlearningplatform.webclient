import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { LayoutCardComponent } from './layout-card/layout-card.component';

import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { IncardLearningByChooseRadioAnswerComponent } from './incard-learning-by-choose-radio-answer/incard-learning-by-choose-radio-answer.component';
import { IncardRememberWordComponent } from './incard-remember-word/incard-remember-word.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LayoutCardComponent,
    IncardLearningByChooseRadioAnswerComponent,
    IncardRememberWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
