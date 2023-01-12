import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBlockComponent } from './components/left-block/left-block.component';
import { RightBlockComponent } from './components/right-block/right-block.component';
import { MainBlockComponent } from './components/main-block/main-block.component';
import { SearchBarComponent } from './components/left-block/search-bar/search-bar.component';
import { TaskListComponent } from './components/left-block/task-list/task-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LeftBlockComponent,
    RightBlockComponent,
    MainBlockComponent,
    SearchBarComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
