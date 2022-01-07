import { DisplayAuthorsService } from './authors/display-authors.service';
import { TaskService } from './task/task.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { AuthorsComponent } from './authors/authors.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TaskService,
    DisplayAuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
