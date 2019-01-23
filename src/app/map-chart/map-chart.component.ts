import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4geodata_usaLow from '@amcharts/amcharts4-geodata/usaLow';

@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.css']
})
export class MapChartComponent implements OnInit {
  polygonTemplate;
  hs;
  constructor() { }

  ngOnInit() {

    // Create map instance
    const chart = am4core.create('map-chart', am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Series for World map
    const worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
    worldSeries.exclude = ['AQ'];
    worldSeries.useGeodata = true;

    this.polygonTemplate = worldSeries.mapPolygons.template;
    this.polygonTemplate.tooltipText = '{name}';
    this.polygonTemplate.fill = chart.colors.getIndex(0);

    // Hover state
    this.hs = this.polygonTemplate.states.create('hover');
    this.hs.properties.fill = am4core.color('#367B25');

    // Series for United States map
    const usaSeries = chart.series.push(new am4maps.MapPolygonSeries());
    usaSeries.geodata = am4geodata_usaLow;

    const polygonTemplate = usaSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{name}';
    polygonTemplate.fill = chart.colors.getIndex(1);

    // Hover state
    const hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#367B25');
    const title = chart.titles.create();
    title.text = 'Map Chart';
    title.marginBottom = 90;
    title.fontSize = 25;
  }

}
