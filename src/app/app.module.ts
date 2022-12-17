import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatHeaderComponent } from './components/cat-header/cat-header.component';
import { CatSearchComponent } from './components/cat-search/cat-search.component';
import { CatApiService } from './services/cat-api.service';

@NgModule({
  declarations: [
    AppComponent,
    CatHeaderComponent,
    CatSearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CatApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
