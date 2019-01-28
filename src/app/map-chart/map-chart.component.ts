import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4geodata_usaLow from '@amcharts/amcharts4-geodata/usaLow';
import am4geodata_asiaHight from '@amcharts/amcharts4-geodata/region/world/asiaHigh';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.css']
})
export class MapChartComponent implements OnInit {
  url: any;
  constructor() { }
  ngOnInit() {


    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create map instance
    const chart = am4core.create('map-chart', am4maps.MapChart);


    // Zoom control
    chart.zoomControl = new am4maps.ZoomControl();

    const homeButton = new am4core.Button();
    homeButton.events.on('hit', function () {
      chart.goHome();
    });

    homeButton.icon = new am4core.Sprite();
    homeButton.padding(7, 5, 7, 5);
    homeButton.width = 20;
    homeButton.icon.path = 'M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8';
    homeButton.marginBottom = 10;
    homeButton.parent = chart.zoomControl;
    homeButton.insertBefore(chart.zoomControl.plusButton);


    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Series for World map
    const worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
    worldSeries.exclude = ['AQ'];
    worldSeries.useGeodata = true;

    const polygonTemplateWorld = worldSeries.mapPolygons.template;
    polygonTemplateWorld.tooltipText = '{name}';
    polygonTemplateWorld.fill = chart.colors.getIndex(0);

    const hsWorld = polygonTemplateWorld.states.create('hover');
    hsWorld.properties.fill = am4core.color('#367B25');

    // Series for United States map
    const usaSeries = chart.series.push(new am4maps.MapPolygonSeries());
    usaSeries.geodata = am4geodata_usaLow;

    const polygonTemplateUsa = usaSeries.mapPolygons.template;
    polygonTemplateUsa.tooltipText = '{name}';
    polygonTemplateUsa.fill = chart.colors.getIndex(1);

    const hsUsa = polygonTemplateUsa.states.create('hover');
    hsUsa.properties.fill = am4core.color('#367B25');

    // Series for Asia map

    const asiaSeries = chart.series.push(new am4maps.MapPolygonSeries());
    asiaSeries.geodata = am4geodata_asiaHight;

    const polygonTemplateAsia = asiaSeries.mapPolygons.template;
    polygonTemplateAsia.tooltipText = '{name}';
    polygonTemplateAsia.fill = chart.colors.getIndex(4);

    const hsAsia = polygonTemplateAsia.states.create('hover');
    hsAsia.properties.fill = am4core.color('#367B25');

    // Click Event On Map
    usaSeries.mapPolygons.template.events.on('hit', function (ev) {
      window.open('https://www.google.com', '_blank');
      // ev.target.series.data.forEach(item => {
      //   if (item.name === 'United States of America') {
      //     this.url = 'https://www.google.com';
      //   }
      // });
    }, this);

    asiaSeries.mapPolygons.template.events.on('hit', function (ev) {
      window.open('https://www.youtube.com', '_blank');
    }, this);

    const title = chart.titles.create();
    title.text = 'Map Chart';
    title.fontSize = 25;
  }
}
