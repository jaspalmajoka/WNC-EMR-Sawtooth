import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { StateComponent } from './state/state.component';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { Base64Pipe } from './shared/base64.pipe';
import { BlocksComponent } from './blocks/blocks.component';
import { BatchesComponent } from './batches/batches.component';


@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    HomeComponent,
    TransactionsComponent,
    Base64Pipe,
    BlocksComponent,
    BatchesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [ApiService, Base64Pipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
