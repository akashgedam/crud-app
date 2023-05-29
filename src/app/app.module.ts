import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeeDataComponent } from './components/employee-table/employee-data/employee-data.component';
import { HttpClientModule } from '@angular/common/http';
import { TextTransformPipe } from './pipes/text-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeDataComponent,
    TextTransformPipe
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
