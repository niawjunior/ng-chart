import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StackedChartComponent } from './stacked-chart/stacked-chart.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MapChartComponent } from './map-chart/map-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    StackedChartComponent,
    GaugeChartComponent,
    PieChartComponent,
    MapChartComponent,
    BarChartComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
