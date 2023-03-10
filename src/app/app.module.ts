import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { TarefasModule } from './tarefas/tarefas.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    TarefasModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
