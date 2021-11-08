import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PointsComponent } from './points/points.component';
import { AgGridModule } from 'ag-grid-angular';
import { JoinHomeComponent } from './join-home/join-home.component';
import { PointingComponent } from './pointing/pointing.component';
import { Observable,Subject } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    PointsComponent,
    JoinHomeComponent,
    PointingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
