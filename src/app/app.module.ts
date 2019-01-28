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
import { PrimengTableComponent } from './primeng-table/primeng-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule } from 'primeng/datatable';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { BarchartVerticalComponent } from './barchart-vertical/barchart-vertical.component';
@NgModule({
  declarations: [
    AppComponent,
    StackedChartComponent,
    GaugeChartComponent,
    PieChartComponent,
    MapChartComponent,
    BarChartComponent,
    DatatableComponent,
    PrimengTableComponent,
    BarchartVerticalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataTablesModule,
    DataTableModule,
    TableModule,
    PaginatorModule,
    SliderModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
