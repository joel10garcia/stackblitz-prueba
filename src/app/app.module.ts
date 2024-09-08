import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ViewGifComponent } from './view/view-gif/view-gif.component';
import { ViewHomeComponent } from './view/view-home/view-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewGifComponent,
    ViewHomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //Router
    AppRoutingModule,
    //Forms
    ReactiveFormsModule,
    //Material
    MatFormFieldModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
