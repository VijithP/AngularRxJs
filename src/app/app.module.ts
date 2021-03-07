import { BrowserModule } from '@angular/platform-browser';
import { NgModule,OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import {  HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit { 
 
 inputvalue:string="";
 constructor() {
   
 }
 ngOnInit(){
  this.inputvalue="success"
 }

}
