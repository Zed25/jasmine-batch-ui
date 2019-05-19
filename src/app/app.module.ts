import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module';
import { FirstQueryPageComponent } from './_pages/query/first/first-query-page.component';
import { SecondQueryPageComponent } from './_pages/query/second/second-query-page.component';
import { ThirdQueryPageComponent } from './_pages/query/third/third-query-page.component';
import { TableComponent } from './shared/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstQueryPageComponent,
    SecondQueryPageComponent,
    ThirdQueryPageComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
