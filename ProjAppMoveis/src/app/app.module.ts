import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {ShareModule} from './share/share.module';
import {TlogModule} from './tlog/tlog.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ShareModule,
    TlogModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
