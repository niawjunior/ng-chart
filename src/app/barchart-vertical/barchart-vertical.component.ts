import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'app-barchart-vertical',
  templateUrl: './barchart-vertical.component.html',
  styleUrls: ['./barchart-vertical.component.css']
})
export class BarchartVerticalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const chart = am4core.create('bar-chart-vertical', am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();
    chart.data = [{
      'country': 'USA',
      'visits': 3025
    }, {
      'country': 'China',
      'visits': 1882
    }, {
      'country': 'Japan',
      'visits': 1809
    }, {
      'country': 'Germany',
      'visits': 1322
    }, {
      'country': 'UK',
      'visits': 1122
    }, {
      'country': 'France',
      'visits': 1114
    }, {
      'country': 'India',
      'visits': 984
    }, {
      'country': 'Spain',
      'visits': 711
    }, {
      'country': 'Netherlands',
      'visits': 665
    }, {
      'country': 'Russia',
      'visits': 580
    }, {
      'country': 'South Korea',
      'visits': 443
    }, {
      'country': 'Canada',
      'visits': 441
    }];


    // Create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'country';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = 'right';
    categoryAxis.renderer.labels.template.verticalCenter = 'middle';
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = 'visits';
    series.dataFields.categoryX = 'country';
    series.tooltipText = '[{categoryX}: bold]{valueY}[/]';
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = 'vertical';

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    const hoverState = series.columns.template.column.states.create('hover');
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add('fill', (fill, target) => {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();
    const title = chart.titles.create();
    title.text = 'Bar Chart Vertical';
    title.marginBottom = 30;
    title.fontSize = 25;
  }

}