import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ListComponent } from './list/list.component';
import { FunctionalsModule } from './functionals/functionals.module';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FunctionalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
