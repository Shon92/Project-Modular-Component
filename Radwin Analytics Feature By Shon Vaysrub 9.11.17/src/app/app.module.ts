import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// My component imports
import { AppComponent } from './app.component';
import {AnlyticsComponent} from './Components/Anlytc.Dropdown.component/Anlytc.Dropdown.component';
import {CategoryComponent} from 'app/Components/Category.component/Category.component'

@NgModule({
  declarations: [
    AppComponent,
    AnlyticsComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
