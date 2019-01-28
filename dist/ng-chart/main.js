(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"mt-5\">\n    <app-stacked-chart></app-stacked-chart>\n  </div>\n  <div class=\"mt-5\">\n    <app-bar-chart></app-bar-chart>\n  </div>\n  <div class=\"mt-5\">\n    <app-barchart-vertical></app-barchart-vertical>\n  </div>\n  <div class=\"mt-5\">\n    <app-gauge-chart></app-gauge-chart>\n  </div>\n  <div class=\"mt-5\">\n    <app-pie-chart></app-pie-chart>\n  </div>\n  <div class=\"mt-5\">\n    <app-map-chart></app-map-chart>\n  </div>\n  <div class=\"mt-5\">\n    <app-primeng-table></app-primeng-table>\n  </div>\n  <br><br>\n  <!-- <div class=\"mt-5 mb-5\">\n    <app-datatable></app-datatable>\n  </div> -->\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-amcharts';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _stacked_chart_stacked_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stacked-chart/stacked-chart.component */ "./src/app/stacked-chart/stacked-chart.component.ts");
/* harmony import */ var _gauge_chart_gauge_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gauge-chart/gauge-chart.component */ "./src/app/gauge-chart/gauge-chart.component.ts");
/* harmony import */ var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pie-chart/pie-chart.component */ "./src/app/pie-chart/pie-chart.component.ts");
/* harmony import */ var _map_chart_map_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-chart/map-chart.component */ "./src/app/map-chart/map-chart.component.ts");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "./src/app/bar-chart/bar-chart.component.ts");
/* harmony import */ var _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datatable/datatable.component */ "./src/app/datatable/datatable.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _primeng_table_primeng_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./primeng-table/primeng-table.component */ "./src/app/primeng-table/primeng-table.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/datatable */ "./node_modules/primeng/datatable.js");
/* harmony import */ var primeng_datatable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_datatable__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/paginator.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_paginator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _barchart_vertical_barchart_vertical_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./barchart-vertical/barchart-vertical.component */ "./src/app/barchart-vertical/barchart-vertical.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _stacked_chart_stacked_chart_component__WEBPACK_IMPORTED_MODULE_3__["StackedChartComponent"],
                _gauge_chart_gauge_chart_component__WEBPACK_IMPORTED_MODULE_4__["GaugeChartComponent"],
                _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__["PieChartComponent"],
                _map_chart_map_chart_component__WEBPACK_IMPORTED_MODULE_6__["MapChartComponent"],
                _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_7__["BarChartComponent"],
                _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_8__["DatatableComponent"],
                _primeng_table_primeng_table_component__WEBPACK_IMPORTED_MODULE_10__["PrimengTableComponent"],
                _barchart_vertical_barchart_vertical_component__WEBPACK_IMPORTED_MODULE_17__["BarchartVerticalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
                primeng_datatable__WEBPACK_IMPORTED_MODULE_12__["DataTableModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
                primeng_paginator__WEBPACK_IMPORTED_MODULE_14__["PaginatorModule"],
                primeng_slider__WEBPACK_IMPORTED_MODULE_15__["SliderModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_16__["MultiSelectModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-chart/bar-chart.component.css":
/*!***************************************************!*\
  !*** ./src/app/bar-chart/bar-chart.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bar-chart/bar-chart.component.html":
/*!****************************************************!*\
  !*** ./src/app/bar-chart/bar-chart.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bar-chart\" style=\"width: 100%; height: 500px\"></div>\n"

/***/ }),

/***/ "./src/app/bar-chart/bar-chart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bar-chart/bar-chart.component.ts ***!
  \**************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarChartComponent = /** @class */ (function () {
    function BarChartComponent() {
    }
    BarChartComponent.prototype.ngOnInit = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]('bar-chart', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
        chart.data = [{
                'age': '85+',
                'male': -0.1,
                'female': 0.3
            }, {
                'age': '80-54',
                'male': -0.2,
                'female': 0.3
            }, {
                'age': '75-79',
                'male': -0.3,
                'female': 0.6
            }, {
                'age': '70-74',
                'male': -0.5,
                'female': 0.8
            }, {
                'age': '65-69',
                'male': -0.8,
                'female': 1.0
            }, {
                'age': '60-64',
                'male': -1.1,
                'female': 1.3
            }, {
                'age': '55-59',
                'male': -1.7,
                'female': 1.9
            }, {
                'age': '50-54',
                'male': -2.2,
                'female': 2.5
            }, {
                'age': '45-49',
                'male': -2.8,
                'female': 3.0
            }, {
                'age': '40-44',
                'male': -3.4,
                'female': 3.6
            }, {
                'age': '35-39',
                'male': -4.2,
                'female': 4.1
            }, {
                'age': '30-34',
                'male': -5.2,
                'female': 4.8
            }, {
                'age': '25-29',
                'male': -5.6,
                'female': 5.1
            }, {
                'age': '20-24',
                'male': -5.1,
                'female': 5.1
            }, {
                'age': '15-19',
                'male': -3.8,
                'female': 3.8
            }, {
                'age': '10-14',
                'male': -3.2,
                'female': 3.4
            }, {
                'age': '5-9',
                'male': -4.4,
                'female': 4.1
            }, {
                'age': '0-4',
                'male': -5.0,
                'female': 4.8
            }];
        // Use only absolute numbers
        chart.numberFormatter.numberFormat = '#.#s';
        // Create axes
        var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CategoryAxis"]());
        categoryAxis.dataFields.category = 'age';
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.inversed = true;
        var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
        valueAxis.extraMin = 0.1;
        valueAxis.extraMax = 0.1;
        valueAxis.renderer.minGridDistance = 40;
        valueAxis.renderer.ticks.template.length = 5;
        valueAxis.renderer.ticks.template.disabled = false;
        valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
        valueAxis.renderer.labels.template.adapter.add('text', function (text) {
            return text === 'Male' || text === 'Female' ? text : text + '%';
        });
        // Create series
        var male = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
        male.dataFields.valueX = 'male';
        male.dataFields.categoryY = 'age';
        male.clustered = false;
        var maleLabel = male.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LabelBullet"]());
        maleLabel.label.text = '{valueX}%';
        maleLabel.label.hideOversized = false;
        maleLabel.label.truncate = false;
        maleLabel.label.horizontalCenter = 'right';
        maleLabel.label.dx = -10;
        var female = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
        female.dataFields.valueX = 'female';
        female.dataFields.categoryY = 'age';
        female.clustered = false;
        var femaleLabel = female.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LabelBullet"]());
        femaleLabel.label.text = '{valueX}%';
        femaleLabel.label.hideOversized = false;
        femaleLabel.label.truncate = false;
        femaleLabel.label.horizontalCenter = 'left';
        femaleLabel.label.dx = 10;
        var maleRange = valueAxis.axisRanges.create();
        maleRange.value = -10;
        maleRange.endValue = 0;
        maleRange.label.text = 'Male';
        maleRange.label.fill = chart.colors.list[0];
        maleRange.label.dy = 20;
        maleRange.label.fontWeight = '600';
        maleRange.grid.strokeOpacity = 1;
        maleRange.grid.stroke = male.stroke;
        var femaleRange = valueAxis.axisRanges.create();
        femaleRange.value = 0;
        femaleRange.endValue = 10;
        femaleRange.label.text = 'Female';
        femaleRange.label.fill = chart.colors.list[1];
        femaleRange.label.dy = 20;
        femaleRange.label.fontWeight = '600';
        femaleRange.grid.strokeOpacity = 1;
        femaleRange.grid.stroke = female.stroke;
        var title = chart.titles.create();
        title.text = 'Bar Chart';
        title.marginBottom = 30;
        title.fontSize = 25;
    };
    BarChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-chart',
            template: __webpack_require__(/*! ./bar-chart.component.html */ "./src/app/bar-chart/bar-chart.component.html"),
            styles: [__webpack_require__(/*! ./bar-chart.component.css */ "./src/app/bar-chart/bar-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BarChartComponent);
    return BarChartComponent;
}());



/***/ }),

/***/ "./src/app/barchart-vertical/barchart-vertical.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/barchart-vertical/barchart-vertical.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcmNoYXJ0LXZlcnRpY2FsL2JhcmNoYXJ0LXZlcnRpY2FsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/barchart-vertical/barchart-vertical.component.html":
/*!********************************************************************!*\
  !*** ./src/app/barchart-vertical/barchart-vertical.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bar-chart-vertical\" style=\"width: 100%; height: 700px\"></div>"

/***/ }),

/***/ "./src/app/barchart-vertical/barchart-vertical.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/barchart-vertical/barchart-vertical.component.ts ***!
  \******************************************************************/
/*! exports provided: BarchartVerticalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarchartVerticalComponent", function() { return BarchartVerticalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarchartVerticalComponent = /** @class */ (function () {
    function BarchartVerticalComponent() {
    }
    BarchartVerticalComponent.prototype.ngOnInit = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]('bar-chart-vertical', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
        chart.scrollbarX = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"]();
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
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CategoryAxis"]());
        categoryAxis.dataFields.category = 'country';
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.labels.template.horizontalCenter = 'right';
        categoryAxis.renderer.labels.template.verticalCenter = 'middle';
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.tooltip.disabled = true;
        categoryAxis.renderer.minHeight = 110;
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
        valueAxis.renderer.minWidth = 50;
        // Create series
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
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
        var hoverState = series.columns.template.column.states.create('hover');
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;
        series.columns.template.adapter.add('fill', function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });
        // Cursor
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYCursor"]();
        var title = chart.titles.create();
        title.text = 'Bar Chart Vertical';
        title.marginBottom = 30;
        title.fontSize = 25;
    };
    BarchartVerticalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-barchart-vertical',
            template: __webpack_require__(/*! ./barchart-vertical.component.html */ "./src/app/barchart-vertical/barchart-vertical.component.html"),
            styles: [__webpack_require__(/*! ./barchart-vertical.component.css */ "./src/app/barchart-vertical/barchart-vertical.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BarchartVerticalComponent);
    return BarchartVerticalComponent;
}());



/***/ }),

/***/ "./src/app/datatable/datatable.component.css":
/*!***************************************************!*\
  !*** ./src/app/datatable/datatable.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YXRhYmxlL2RhdGF0YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZGF0YXRhYmxlL2RhdGF0YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/datatable/datatable.component.html":
/*!****************************************************!*\
  !*** ./src/app/datatable/datatable.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table datatable [dtOptions]=\"dtOptions\" class=\"row-border hover\">\n  <thead>\n    <tr>\n      <th>ID</th>\n      <th>Age</th>\n      <th>Name</th>\n      <th>Email</th>\n      <th>Phone</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of data\">\n      <td>{{ data.id }}</td>\n      <td class=\"text-danger\">{{ data.age }}</td>\n      <td>{{ data.name }}</td>\n      <td>{{ data.email }}</td>\n      <td class=\"text-white bg-secondary\">{{ data.phone }}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/datatable/datatable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/datatable/datatable.component.ts ***!
  \**************************************************/
/*! exports provided: DatatableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableComponent", function() { return DatatableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatatableComponent = /** @class */ (function () {
    function DatatableComponent() {
        this.dtOptions = {};
        this.data = [];
    }
    DatatableComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            responsive: true,
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.data = [
            {
                'id': '5c4aaf9dd2f91a1b556acbbf',
                'age': 20,
                'name': 'Wallace Mcfarland',
                'email': 'wallacemcfarland@printspan.com',
                'phone': '+66 (811) 463-3047'
            },
            {
                'id': '5c4aaf9d2fbd7976c432e205',
                'age': 35,
                'name': 'Atkinson Parker',
                'email': 'atkinsonparker@printspan.com',
                'phone': '+66 (805) 417-2319'
            },
            {
                'id': '5c4aaf9d6e63bdc8610a0885',
                'age': 34,
                'name': 'Dominique Spence',
                'email': 'dominiquespence@printspan.com',
                'phone': '+66 (807) 403-2374'
            },
            {
                'id': '5c4aaf9d0fc42f678bea0370',
                'age': 38,
                'name': 'Meyer Bolton',
                'email': 'meyerbolton@printspan.com',
                'phone': '+66 (837) 557-3168'
            },
            {
                'id': '5c4aaf9d0cde97b43de24080',
                'age': 29,
                'name': 'Merrill Baxter',
                'email': 'merrillbaxter@printspan.com',
                'phone': '+66 (941) 585-3204'
            },
            {
                'id': '5c4aaf9d2b030a1dd2d41b79',
                'age': 38,
                'name': 'Shannon Blake',
                'email': 'shannonblake@printspan.com',
                'phone': '+66 (944) 569-2172'
            },
            {
                'id': '5c4aaf9df8b9bfc0dc4bc03d',
                'age': 28,
                'name': 'Norman Roach',
                'email': 'normanroach@printspan.com',
                'phone': '+66 (897) 424-3513'
            },
            {
                'id': '5c4aaf9df9eeac03013bc1f0',
                'age': 30,
                'name': 'Hart Lester',
                'email': 'hartlester@printspan.com',
                'phone': '+66 (912) 452-3969'
            },
            {
                'id': '5c4aaf9d2cad2ad4bc5a498e',
                'age': 24,
                'name': 'Ella Stephens',
                'email': 'ellastephens@printspan.com',
                'phone': '+66 (911) 567-3589'
            },
            {
                'id': '5c4aaf9d026d513d15829a8a',
                'age': 20,
                'name': 'Daniel Austin',
                'email': 'danielaustin@printspan.com',
                'phone': '+66 (941) 588-2845'
            },
            {
                'id': '5c4aaf9d0f44664eb29d9468',
                'age': 28,
                'name': 'Lucia Cochran',
                'email': 'luciacochran@printspan.com',
                'phone': '+66 (907) 435-2161'
            },
            {
                'id': '5c4aaf9dd7defb4c41872ec4',
                'age': 40,
                'name': 'Lynda Bean',
                'email': 'lyndabean@printspan.com',
                'phone': '+66 (986) 549-2591'
            },
            {
                'id': '5c4aaf9dc8ce5460dcf4a5a1',
                'age': 39,
                'name': 'Effie Rios',
                'email': 'effierios@printspan.com',
                'phone': '+66 (894) 437-3833'
            },
            {
                'id': '5c4aaf9dfacd1a0fcb046655',
                'age': 36,
                'name': 'Griffin Serrano',
                'email': 'griffinserrano@printspan.com',
                'phone': '+66 (924) 570-2826'
            },
            {
                'id': '5c4aaf9d107d0ac8df6fa8d9',
                'age': 21,
                'name': 'Gabriela Mitchell',
                'email': 'gabrielamitchell@printspan.com',
                'phone': '+66 (865) 481-2064'
            },
            {
                'id': '5c4aaf9dc085fdc88e64eab2',
                'age': 33,
                'name': 'Pierce Galloway',
                'email': 'piercegalloway@printspan.com',
                'phone': '+66 (901) 553-3202'
            },
            {
                'id': '5c4aaf9d4a6fffcbf4694c98',
                'age': 40,
                'name': 'Carr Bright',
                'email': 'carrbright@printspan.com',
                'phone': '+66 (819) 594-3033'
            },
            {
                'id': '5c4aaf9d3c4a646e0244c97e',
                'age': 34,
                'name': 'Gould May',
                'email': 'gouldmay@printspan.com',
                'phone': '+66 (868) 410-2792'
            },
            {
                'id': '5c4aaf9d6a14ea18e58c5cb5',
                'age': 35,
                'name': 'Tamara Carlson',
                'email': 'tamaracarlson@printspan.com',
                'phone': '+66 (920) 466-2685'
            },
            {
                'id': '5c4aaf9d0abc88961c07d34e',
                'age': 35,
                'name': 'Adams Heath',
                'email': 'adamsheath@printspan.com',
                'phone': '+66 (909) 588-3430'
            },
            {
                'id': '5c4aaf9d327830fad5957bb2',
                'age': 32,
                'name': 'Bowen Cole',
                'email': 'bowencole@printspan.com',
                'phone': '+66 (854) 590-2874'
            },
            {
                'id': '5c4aaf9d37c6fbee42d12fbf',
                'age': 35,
                'name': 'Burnett Burt',
                'email': 'burnettburt@printspan.com',
                'phone': '+66 (875) 406-2219'
            },
            {
                'id': '5c4aaf9db43e9185a11f149e',
                'age': 36,
                'name': 'Katelyn Valdez',
                'email': 'katelynvaldez@printspan.com',
                'phone': '+66 (948) 427-3463'
            },
            {
                'id': '5c4aaf9d72d2f690eb464f4d',
                'age': 38,
                'name': 'Booker Johnston',
                'email': 'bookerjohnston@printspan.com',
                'phone': '+66 (861) 486-2162'
            },
            {
                'id': '5c4aaf9da0b17c578a7c7088',
                'age': 22,
                'name': 'Winifred Dunn',
                'email': 'winifreddunn@printspan.com',
                'phone': '+66 (898) 407-2784'
            },
            {
                'id': '5c4aaf9d482fac2b33686360',
                'age': 39,
                'name': 'Jefferson Mccall',
                'email': 'jeffersonmccall@printspan.com',
                'phone': '+66 (991) 404-3802'
            },
            {
                'id': '5c4aaf9d403eac6c87699e17',
                'age': 32,
                'name': 'Elinor Soto',
                'email': 'elinorsoto@printspan.com',
                'phone': '+66 (963) 419-2686'
            },
            {
                'id': '5c4aaf9d347f8d1873b9ecd7',
                'age': 37,
                'name': 'Hunt Daniel',
                'email': 'huntdaniel@printspan.com',
                'phone': '+66 (967) 574-2900'
            },
            {
                'id': '5c4aaf9d5fd2a8b4333cd225',
                'age': 25,
                'name': 'Clara Nicholson',
                'email': 'claranicholson@printspan.com',
                'phone': '+66 (988) 503-2566'
            },
            {
                'id': '5c4aaf9dc5339d09070194a5',
                'age': 35,
                'name': 'Carlson Mccarthy',
                'email': 'carlsonmccarthy@printspan.com',
                'phone': '+66 (989) 564-3990'
            },
            {
                'id': '5c4aaf9d68be6473a60016d0',
                'age': 25,
                'name': 'Inez Small',
                'email': 'inezsmall@printspan.com',
                'phone': '+66 (920) 472-3906'
            },
            {
                'id': '5c4aaf9d843dfea1e0579a55',
                'age': 38,
                'name': 'Jeannie Griffin',
                'email': 'jeanniegriffin@printspan.com',
                'phone': '+66 (953) 492-3999'
            },
            {
                'id': '5c4aaf9d139c489af378fc87',
                'age': 30,
                'name': 'Reed Mcmahon',
                'email': 'reedmcmahon@printspan.com',
                'phone': '+66 (996) 469-3765'
            },
            {
                'id': '5c4aaf9d017e26828338f7e2',
                'age': 37,
                'name': 'Hahn Nolan',
                'email': 'hahnnolan@printspan.com',
                'phone': '+66 (949) 525-2775'
            },
            {
                'id': '5c4aaf9d71d124cd65008bef',
                'age': 31,
                'name': 'Blanchard Sellers',
                'email': 'blanchardsellers@printspan.com',
                'phone': '+66 (941) 547-3292'
            },
            {
                'id': '5c4aaf9de32aa312a48e43ec',
                'age': 29,
                'name': 'Gwen Mills',
                'email': 'gwenmills@printspan.com',
                'phone': '+66 (886) 453-3174'
            },
            {
                'id': '5c4aaf9dd6bc185d627fd8c7',
                'age': 31,
                'name': 'Suzanne Patton',
                'email': 'suzannepatton@printspan.com',
                'phone': '+66 (926) 581-2730'
            },
            {
                'id': '5c4aaf9d94cf9f1243de95c6',
                'age': 31,
                'name': 'Eddie Francis',
                'email': 'eddiefrancis@printspan.com',
                'phone': '+66 (838) 574-3472'
            },
            {
                'id': '5c4aaf9df5a15732072ab9f0',
                'age': 26,
                'name': 'Finley Bradford',
                'email': 'finleybradford@printspan.com',
                'phone': '+66 (824) 514-3862'
            },
            {
                'id': '5c4aaf9d7444c0c29af2d1c8',
                'age': 39,
                'name': 'Cash Crane',
                'email': 'cashcrane@printspan.com',
                'phone': '+66 (933) 573-3323'
            },
            {
                'id': '5c4aaf9d00437dd9dbcdf2ed',
                'age': 31,
                'name': 'Bullock Wright',
                'email': 'bullockwright@printspan.com',
                'phone': '+66 (811) 556-2967'
            },
            {
                'id': '5c4aaf9d2125cb9c43f18779',
                'age': 30,
                'name': 'Nelson Odonnell',
                'email': 'nelsonodonnell@printspan.com',
                'phone': '+66 (992) 406-2058'
            },
            {
                'id': '5c4aaf9d7c769a8c9d96ef85',
                'age': 29,
                'name': 'Felecia Davidson',
                'email': 'feleciadavidson@printspan.com',
                'phone': '+66 (995) 454-3043'
            },
            {
                'id': '5c4aaf9db06132b6a91b637c',
                'age': 29,
                'name': 'Porter Guerra',
                'email': 'porterguerra@printspan.com',
                'phone': '+66 (991) 549-2337'
            },
            {
                'id': '5c4aaf9d135a08a7c545f9ed',
                'age': 32,
                'name': 'Sharpe Kidd',
                'email': 'sharpekidd@printspan.com',
                'phone': '+66 (905) 507-3195'
            },
            {
                'id': '5c4aaf9dd773d1e438972c8a',
                'age': 28,
                'name': 'Kristy Hudson',
                'email': 'kristyhudson@printspan.com',
                'phone': '+66 (809) 477-2429'
            },
            {
                'id': '5c4aaf9d0d187feac99289e9',
                'age': 25,
                'name': 'Greta Farmer',
                'email': 'gretafarmer@printspan.com',
                'phone': '+66 (807) 554-2324'
            },
            {
                'id': '5c4aaf9d589578917b54d69f',
                'age': 23,
                'name': 'Cruz Cross',
                'email': 'cruzcross@printspan.com',
                'phone': '+66 (916) 526-3284'
            },
            {
                'id': '5c4aaf9de08b1c123affc8b1',
                'age': 32,
                'name': 'Crane Garrison',
                'email': 'cranegarrison@printspan.com',
                'phone': '+66 (982) 497-3230'
            },
            {
                'id': '5c4aaf9dc822daccc9e290b7',
                'age': 38,
                'name': 'Linda Williams',
                'email': 'lindawilliams@printspan.com',
                'phone': '+66 (978) 596-3861'
            },
            {
                'id': '5c4aaf9d8d5f59fce9fdfaea',
                'age': 25,
                'name': 'Sonia Watson',
                'email': 'soniawatson@printspan.com',
                'phone': '+66 (896) 501-3753'
            },
            {
                'id': '5c4aaf9df53a5ef4a2e8f10b',
                'age': 20,
                'name': 'Pugh Franco',
                'email': 'pughfranco@printspan.com',
                'phone': '+66 (838) 510-3015'
            },
            {
                'id': '5c4aaf9db3d12fa9439d7499',
                'age': 22,
                'name': 'Newton Rutledge',
                'email': 'newtonrutledge@printspan.com',
                'phone': '+66 (924) 467-2603'
            },
            {
                'id': '5c4aaf9d9db11588df398262',
                'age': 33,
                'name': 'Paula Wilkins',
                'email': 'paulawilkins@printspan.com',
                'phone': '+66 (935) 423-3874'
            },
            {
                'id': '5c4aaf9da754990989824567',
                'age': 24,
                'name': 'Annmarie Humphrey',
                'email': 'annmariehumphrey@printspan.com',
                'phone': '+66 (917) 584-2479'
            },
            {
                'id': '5c4aaf9d4cec423c9f9a5b1a',
                'age': 29,
                'name': 'Caroline Garcia',
                'email': 'carolinegarcia@printspan.com',
                'phone': '+66 (931) 575-2771'
            },
            {
                'id': '5c4aaf9da46983fa51bbb59b',
                'age': 30,
                'name': 'Joyce Blankenship',
                'email': 'joyceblankenship@printspan.com',
                'phone': '+66 (937) 540-2146'
            },
            {
                'id': '5c4aaf9ddf424e7e0016a30b',
                'age': 37,
                'name': 'Janine Parrish',
                'email': 'janineparrish@printspan.com',
                'phone': '+66 (894) 558-2338'
            },
            {
                'id': '5c4aaf9dd03a63c3eee5ac9c',
                'age': 27,
                'name': 'Arline Pruitt',
                'email': 'arlinepruitt@printspan.com',
                'phone': '+66 (804) 464-2174'
            },
            {
                'id': '5c4aaf9d0d775407e14b3813',
                'age': 31,
                'name': 'Sheree Kinney',
                'email': 'shereekinney@printspan.com',
                'phone': '+66 (800) 478-3008'
            },
            {
                'id': '5c4aaf9dd7d41508e5da56b8',
                'age': 22,
                'name': 'Morin Mckay',
                'email': 'morinmckay@printspan.com',
                'phone': '+66 (906) 404-3300'
            },
            {
                'id': '5c4aaf9d94272a588da50e84',
                'age': 38,
                'name': 'Dennis Poole',
                'email': 'dennispoole@printspan.com',
                'phone': '+66 (811) 579-2527'
            },
            {
                'id': '5c4aaf9deda7d72f97720abc',
                'age': 29,
                'name': 'Osborn Whitley',
                'email': 'osbornwhitley@printspan.com',
                'phone': '+66 (980) 534-2910'
            },
            {
                'id': '5c4aaf9d22b59e9f6ba09b63',
                'age': 23,
                'name': 'Kelley Dale',
                'email': 'kelleydale@printspan.com',
                'phone': '+66 (826) 571-2897'
            },
            {
                'id': '5c4aaf9d77c11c875bb2f25f',
                'age': 30,
                'name': 'Parks Kaufman',
                'email': 'parkskaufman@printspan.com',
                'phone': '+66 (931) 457-2736'
            },
            {
                'id': '5c4aaf9ddaa4af52f80ff959',
                'age': 20,
                'name': 'Hunter Rice',
                'email': 'hunterrice@printspan.com',
                'phone': '+66 (899) 407-3404'
            },
            {
                'id': '5c4aaf9d5df35ceaba8d5aaa',
                'age': 29,
                'name': 'Keri Fischer',
                'email': 'kerifischer@printspan.com',
                'phone': '+66 (817) 435-2236'
            },
            {
                'id': '5c4aaf9d7310dc495af9feae',
                'age': 30,
                'name': 'Stefanie Castro',
                'email': 'stefaniecastro@printspan.com',
                'phone': '+66 (848) 428-2393'
            },
            {
                'id': '5c4aaf9df9450254b8df5eec',
                'age': 31,
                'name': 'Rosemary Harris',
                'email': 'rosemaryharris@printspan.com',
                'phone': '+66 (850) 544-2288'
            },
            {
                'id': '5c4aaf9d1dc41e17bc1376e3',
                'age': 21,
                'name': 'Jackson Estrada',
                'email': 'jacksonestrada@printspan.com',
                'phone': '+66 (838) 503-3494'
            },
            {
                'id': '5c4aaf9dcdcb41dfcb4695d4',
                'age': 38,
                'name': 'Figueroa Ewing',
                'email': 'figueroaewing@printspan.com',
                'phone': '+66 (871) 577-2291'
            },
            {
                'id': '5c4aaf9d611b840c93c9e4e4',
                'age': 32,
                'name': 'Bette Ramirez',
                'email': 'betteramirez@printspan.com',
                'phone': '+66 (960) 400-3478'
            },
            {
                'id': '5c4aaf9d7307b2eb44a5618f',
                'age': 32,
                'name': 'Pam Ferguson',
                'email': 'pamferguson@printspan.com',
                'phone': '+66 (889) 534-3957'
            },
            {
                'id': '5c4aaf9db36e85cf9fee3775',
                'age': 39,
                'name': 'Valerie Sosa',
                'email': 'valeriesosa@printspan.com',
                'phone': '+66 (909) 430-2299'
            },
            {
                'id': '5c4aaf9d746ca15b64bf09b4',
                'age': 27,
                'name': 'Kay Montoya',
                'email': 'kaymontoya@printspan.com',
                'phone': '+66 (917) 407-3056'
            },
            {
                'id': '5c4aaf9db56a15c72b10f42f',
                'age': 38,
                'name': 'Cook Larsen',
                'email': 'cooklarsen@printspan.com',
                'phone': '+66 (834) 437-3916'
            },
            {
                'id': '5c4aaf9d0b5f6cd10baac857',
                'age': 28,
                'name': 'Clemons Payne',
                'email': 'clemonspayne@printspan.com',
                'phone': '+66 (883) 574-2558'
            },
            {
                'id': '5c4aaf9d0d7007f8e1ce48ea',
                'age': 34,
                'name': 'Bryan Hodges',
                'email': 'bryanhodges@printspan.com',
                'phone': '+66 (989) 456-3503'
            },
            {
                'id': '5c4aaf9da011006c739f3f19',
                'age': 32,
                'name': 'Huber Strickland',
                'email': 'huberstrickland@printspan.com',
                'phone': '+66 (890) 405-3269'
            },
            {
                'id': '5c4aaf9d148889e35bc8d223',
                'age': 24,
                'name': 'Chambers Chambers',
                'email': 'chamberschambers@printspan.com',
                'phone': '+66 (963) 573-3233'
            },
            {
                'id': '5c4aaf9d742ae3e812bde915',
                'age': 38,
                'name': 'Rocha Sanders',
                'email': 'rochasanders@printspan.com',
                'phone': '+66 (967) 446-3705'
            },
            {
                'id': '5c4aaf9d40cdf15c9785cb5c',
                'age': 25,
                'name': 'Lara Weber',
                'email': 'laraweber@printspan.com',
                'phone': '+66 (840) 584-3328'
            },
            {
                'id': '5c4aaf9deade8db2c2007724',
                'age': 21,
                'name': 'Peterson Mcconnell',
                'email': 'petersonmcconnell@printspan.com',
                'phone': '+66 (861) 517-2861'
            }
        ];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"])
    ], DatatableComponent.prototype, "datatableElement", void 0);
    DatatableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datatable',
            template: __webpack_require__(/*! ./datatable.component.html */ "./src/app/datatable/datatable.component.html"),
            styles: [__webpack_require__(/*! ./datatable.component.css */ "./src/app/datatable/datatable.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DatatableComponent);
    return DatatableComponent;
}());



/***/ }),

/***/ "./src/app/gauge-chart/gauge-chart.component.css":
/*!*******************************************************!*\
  !*** ./src/app/gauge-chart/gauge-chart.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhdWdlLWNoYXJ0L2dhdWdlLWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/gauge-chart/gauge-chart.component.html":
/*!********************************************************!*\
  !*** ./src/app/gauge-chart/gauge-chart.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"gauge-chart\" style=\"width: 100%; height: 500px\"></div>\n"

/***/ }),

/***/ "./src/app/gauge-chart/gauge-chart.component.ts":
/*!******************************************************!*\
  !*** ./src/app/gauge-chart/gauge-chart.component.ts ***!
  \******************************************************/
/*! exports provided: GaugeChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeChartComponent", function() { return GaugeChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GaugeChartComponent = /** @class */ (function () {
    function GaugeChartComponent() {
    }
    GaugeChartComponent.prototype.ngOnInit = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]('gauge-chart', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["GaugeChart"]);
        chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](82);
        var axis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
        axis.min = 0;
        axis.max = 100;
        axis.strictMinMax = true;
        axis.renderer.radius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](80);
        axis.renderer.inside = true;
        axis.renderer.line.strokeOpacity = 1;
        axis.renderer.ticks.template.strokeOpacity = 1;
        axis.renderer.ticks.template.length = 10;
        axis.renderer.grid.template.disabled = true;
        axis.renderer.labels.template.radius = 40;
        axis.renderer.labels.template.adapter.add('text', function (text) {
            return text + '%';
        });
        var colorSet = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["ColorSet"]();
        var axis2 = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
        axis2.min = 0;
        axis2.max = 100;
        axis2.renderer.innerRadius = 10;
        axis2.strictMinMax = true;
        axis2.renderer.labels.template.disabled = true;
        axis2.renderer.ticks.template.disabled = true;
        axis2.renderer.grid.template.disabled = true;
        var range0 = axis2.axisRanges.create();
        range0.value = 0;
        range0.endValue = 50;
        range0.axisFill.fillOpacity = 1;
        range0.axisFill.fill = colorSet.getIndex(0);
        var range1 = axis2.axisRanges.create();
        range1.value = 50;
        range1.endValue = 100;
        range1.axisFill.fillOpacity = 1;
        range1.axisFill.fill = colorSet.getIndex(2);
        /**
         * Label
         */
        var label = chart.radarContainer.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Label"]);
        label.isMeasured = false;
        label.fontSize = 45;
        label.x = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](50);
        label.y = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](100);
        label.horizontalCenter = 'middle';
        label.verticalCenter = 'bottom';
        label.text = '50%';
        /**
         * Hand
         */
        var hand = chart.hands.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ClockHand"]());
        hand.axis = axis2;
        hand.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](20);
        hand.startWidth = 10;
        hand.pin.disabled = true;
        hand.value = 50;
        hand.events.on('propertychanged', function (ev) {
            range0.endValue = ev.target.value;
            range1.value = ev.target.value;
            axis2.invalidate();
        });
        setInterval(function () {
            var value = Math.round(Math.random() * 100);
            label.text = value + '%';
            var animation = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Animation"](hand, {
                property: 'value',
                to: value
            }, 1000, _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["ease"].cubicOut).start();
        }, 2000);
        var title = chart.titles.create();
        title.text = 'Gauge Chart';
        title.marginBottom = 30;
        title.fontSize = 25;
    };
    GaugeChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gauge-chart',
            template: __webpack_require__(/*! ./gauge-chart.component.html */ "./src/app/gauge-chart/gauge-chart.component.html"),
            styles: [__webpack_require__(/*! ./gauge-chart.component.css */ "./src/app/gauge-chart/gauge-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GaugeChartComponent);
    return GaugeChartComponent;
}());



/***/ }),

/***/ "./src/app/map-chart/map-chart.component.css":
/*!***************************************************!*\
  !*** ./src/app/map-chart/map-chart.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC1jaGFydC9tYXAtY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/map-chart/map-chart.component.html":
/*!****************************************************!*\
  !*** ./src/app/map-chart/map-chart.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map-chart\" style=\"width: 100%; height: 500px\"></div>\n"

/***/ }),

/***/ "./src/app/map-chart/map-chart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/map-chart/map-chart.component.ts ***!
  \**************************************************/
/*! exports provided: MapChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapChartComponent", function() { return MapChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/maps */ "./node_modules/@amcharts/amcharts4/maps.js");
/* harmony import */ var _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4-geodata/worldLow */ "./node_modules/@amcharts/amcharts4-geodata/worldLow.js");
/* harmony import */ var _amcharts_amcharts4_geodata_usaLow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4-geodata/usaLow */ "./node_modules/@amcharts/amcharts4-geodata/usaLow.js");
/* harmony import */ var _amcharts_amcharts4_geodata_region_world_asiaHigh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4-geodata/region/world/asiaHigh */ "./node_modules/@amcharts/amcharts4-geodata/region/world/asiaHigh.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MapChartComponent = /** @class */ (function () {
    function MapChartComponent() {
    }
    MapChartComponent.prototype.ngOnInit = function () {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_6__["default"]);
        // Themes end
        // Create map instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]('map-chart', _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapChart"]);
        // Zoom control
        chart.zoomControl = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["ZoomControl"]();
        var homeButton = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Button"]();
        homeButton.events.on('hit', function () {
            chart.goHome();
        });
        homeButton.icon = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Sprite"]();
        homeButton.padding(7, 5, 7, 5);
        homeButton.width = 20;
        homeButton.icon.path = 'M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8';
        homeButton.marginBottom = 10;
        homeButton.parent = chart.zoomControl;
        homeButton.insertBefore(chart.zoomControl.plusButton);
        // Set map definition
        chart.geodata = _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_3__["default"];
        // Set projection
        chart.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["projections"].Miller();
        // Series for World map
        var worldSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapPolygonSeries"]());
        worldSeries.exclude = ['AQ'];
        worldSeries.useGeodata = true;
        var polygonTemplateWorld = worldSeries.mapPolygons.template;
        polygonTemplateWorld.tooltipText = '{name}';
        polygonTemplateWorld.fill = chart.colors.getIndex(0);
        var hsWorld = polygonTemplateWorld.states.create('hover');
        hsWorld.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#367B25');
        // Series for United States map
        var usaSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapPolygonSeries"]());
        usaSeries.geodata = _amcharts_amcharts4_geodata_usaLow__WEBPACK_IMPORTED_MODULE_4__["default"];
        var polygonTemplateUsa = usaSeries.mapPolygons.template;
        polygonTemplateUsa.tooltipText = '{name}';
        polygonTemplateUsa.fill = chart.colors.getIndex(1);
        var hsUsa = polygonTemplateUsa.states.create('hover');
        hsUsa.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#367B25');
        // Series for Asia map
        var asiaSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapPolygonSeries"]());
        asiaSeries.geodata = _amcharts_amcharts4_geodata_region_world_asiaHigh__WEBPACK_IMPORTED_MODULE_5__["default"];
        var polygonTemplateAsia = asiaSeries.mapPolygons.template;
        polygonTemplateAsia.tooltipText = '{name}';
        polygonTemplateAsia.fill = chart.colors.getIndex(4);
        var hsAsia = polygonTemplateAsia.states.create('hover');
        hsAsia.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#367B25');
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
        var title = chart.titles.create();
        title.text = 'Map Chart';
        title.marginBottom = 100;
        title.fontSize = 25;
    };
    MapChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-chart',
            template: __webpack_require__(/*! ./map-chart.component.html */ "./src/app/map-chart/map-chart.component.html"),
            styles: [__webpack_require__(/*! ./map-chart.component.css */ "./src/app/map-chart/map-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapChartComponent);
    return MapChartComponent;
}());



/***/ }),

/***/ "./src/app/pie-chart/pie-chart.component.css":
/*!***************************************************!*\
  !*** ./src/app/pie-chart/pie-chart.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pie-chart/pie-chart.component.html":
/*!****************************************************!*\
  !*** ./src/app/pie-chart/pie-chart.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pie-chart\" style=\"width: 100%; height: 500px\"></div>\n"

/***/ }),

/***/ "./src/app/pie-chart/pie-chart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pie-chart/pie-chart.component.ts ***!
  \**************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PieChartComponent = /** @class */ (function () {
    function PieChartComponent() {
    }
    PieChartComponent.prototype.ngOnInit = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]('pie-chart', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieChart"]);
        var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieSeries"]());
        pieSeries.dataFields.value = 'litres';
        pieSeries.dataFields.category = 'country';
        // Let's cut a hole in our Pie chart the size of 30% the radius
        chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](30);
        // Put a thick white border around each Slice
        pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#fff');
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.slices.template
            // change the cursor on hover to make it apparent the object can be interacted with
            .cursorOverStyle = [
            {
                'property': 'cursor',
                'value': 'pointer'
            }
        ];
        // Create a base filter effect (as if it's not there) for the hover to return to
        var shadow = pieSeries.slices.template.filters.push(new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["DropShadowFilter"]);
        shadow.opacity = 0;
        // Create hover state
        // normally we have to create the hover state, in this case it already exists
        var hoverState = pieSeries.slices.template.states.getKey('hover');
        // Slightly shift the shadow and make it more prominent on hover
        var hoverShadow = hoverState.filters.push(new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["DropShadowFilter"]);
        hoverShadow.opacity = 0.7;
        hoverShadow.blur = 5;
        // Add a legend
        chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["Legend"]();
        chart.legend.position = 'right';
        chart.data = [{
                'country': 'Lithuania',
                'litres': 501.9
            }, {
                'country': 'Czech Republic',
                'litres': 301.9
            }, {
                'country': 'Ireland',
                'litres': 201.1
            }];
        var title = chart.titles.create();
        title.text = 'Pie Chart';
        title.marginBottom = 30;
        title.fontSize = 25;
    };
    PieChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pie-chart',
            template: __webpack_require__(/*! ./pie-chart.component.html */ "./src/app/pie-chart/pie-chart.component.html"),
            styles: [__webpack_require__(/*! ./pie-chart.component.css */ "./src/app/pie-chart/pie-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PieChartComponent);
    return PieChartComponent;
}());



/***/ }),

/***/ "./src/app/primeng-table/primeng-table.component.css":
/*!***********************************************************!*\
  !*** ./src/app/primeng-table/primeng-table.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".old-car {\n    background-color: #7b84f1 !important;\n    color: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbWVuZy10YWJsZS9wcmltZW5nLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvcHJpbWVuZy10YWJsZS9wcmltZW5nLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub2xkLWNhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdiODRmMSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/primeng-table/primeng-table.component.html":
/*!************************************************************!*\
  !*** ./src/app/primeng-table/primeng-table.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-table #dt [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\">\n  <ng-template pTemplate=\"caption\">\n    <div style=\"text-align: right\">\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n      <input type=\"text\" pInputText size=\"50\" placeholder=\"Search\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n    </div>\n  </ng-template>\n  <ng-template pTemplate=\"header\" let-columns>\n    <tr>\n      <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n        {{col.header}}\n        <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n      </th>\n    </tr>\n    <tr>\n      <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n        <input *ngSwitchCase=\"'id'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n        <div *ngSwitchCase=\"'year'\">\n          Value < {{yearFilter}} <i class=\"fa fa-close\" (click)=\"yearFilter=null;dt.filter(null, col.field, col.filterMatchMode)\" style=\"cursor:pointer\" *ngIf=\"yearFilter\"></i>\n            <p-slider [style]=\"{'width':'100%','margin-top':'8px'}\" [(ngModel)]=\"yearFilter\" [min]=\"1970\" [max]=\"2010\" (onChange)=\"onYearChange($event, dt)\"></p-slider>\n        </div>\n        <p-dropdown *ngSwitchCase=\"'brand'\" [options]=\"brands\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value, col.field, 'equals')\"></p-dropdown>\n        <p-multiSelect *ngSwitchCase=\"'color'\" [options]=\"colors\" defaultLabel=\"All Colors\" (onChange)=\"dt.filter($event.value, col.field, 'in')\"></p-multiSelect>\n      </th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n    <tr [pSelectableRow]=\"rowData\">\n      <td *ngFor=\"let col of columns\" style=\"font-weight: bold;\">\n        {{rowData[col.field]}}\n      </td>\n    </tr>\n  </ng-template>\n</p-table>"

/***/ }),

/***/ "./src/app/primeng-table/primeng-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/primeng-table/primeng-table.component.ts ***!
  \**********************************************************/
/*! exports provided: PrimengTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimengTableComponent", function() { return PrimengTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrimengTableComponent = /** @class */ (function () {
    function PrimengTableComponent() {
    }
    PrimengTableComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.brands = [
            { label: 'All Brands', value: null },
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        this.colors = [
            { label: 'White', value: 'White' },
            { label: 'Green', value: 'Green' },
            { label: 'Silver', value: 'Silver' },
            { label: 'Black', value: 'Black' },
            { label: 'Red', value: 'Red' },
            { label: 'Maroon', value: 'Maroon' },
            { label: 'Brown', value: 'Brown' },
            { label: 'Orange', value: 'Orange' },
            { label: 'Blue', value: 'Blue' }
        ];
        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.cars = [
            { 'id': 'a1653d4d', 'brand': 'VW', 'year': 1998, 'color': 'White', 'price': 10000 },
            { 'id': 'ddeb9b10', 'brand': 'Mercedes', 'year': 1985, 'color': 'Green', 'price': 25000 },
            { 'id': 'd8ebe413', 'brand': 'Jaguar', 'year': 1979, 'color': 'Silver', 'price': 30000 },
            { 'id': 'aab227b7', 'brand': 'Audi', 'year': 1970, 'color': 'Black', 'price': 12000 },
            { 'id': '631f7412', 'brand': 'Volvo', 'year': 1992, 'color': 'Red', 'price': 15500 },
            { 'id': '7d2d22b0', 'brand': 'VW', 'year': 1993, 'color': 'Maroon', 'price': 40000 },
            { 'id': '50e900ca', 'brand': 'Fiat', 'year': 1964, 'color': 'Blue', 'price': 25000 },
            { 'id': '4bbcd603', 'brand': 'Renault', 'year': 1983, 'color': 'Maroon', 'price': 22000 },
            { 'id': '70214c7e', 'brand': 'Renault', 'year': 1961, 'color': 'Black', 'price': 19000 },
            { 'id': 'ec229a92', 'brand': 'Audi', 'year': 1984, 'color': 'Brown', 'price': 36000 },
            { 'id': '1083ee40', 'brand': 'VW', 'year': 1984, 'color': 'Silver', 'price': 215000 },
            { 'id': '6e0da3ab', 'brand': 'Volvo', 'year': 1987, 'color': 'Silver', 'price': 32000 },
            { 'id': '5aee636b', 'brand': 'Jaguar', 'year': 1995, 'color': 'Maroon', 'price': 20000 },
            { 'id': '7cc43997', 'brand': 'Jaguar', 'year': 1984, 'color': 'Orange', 'price': 14000 },
            { 'id': '88ec9f66', 'brand': 'Honda', 'year': 1989, 'color': 'Maroon', 'price': 36000 },
            { 'id': 'f5a4a5f5', 'brand': 'BMW', 'year': 1986, 'color': 'Blue', 'price': 28000 },
            { 'id': '15b9a5c9', 'brand': 'Mercedes', 'year': 1986, 'color': 'Orange', 'price': 14000 },
            { 'id': 'f7e18d01', 'brand': 'Mercedes', 'year': 1991, 'color': 'White', 'price': 25000 },
            { 'id': 'cec593d7', 'brand': 'VW', 'year': 1992, 'color': 'Blue', 'price': 36000 },
            { 'id': 'd5bac4f0', 'brand': 'Renault', 'year': 2001, 'color': 'Blue', 'price': 25000 },
            { 'id': '56b527c8', 'brand': 'Jaguar', 'year': 1990, 'color': 'Yellow', 'price': 52000 },
            { 'id': '1ac011ff', 'brand': 'Audi', 'year': 1966, 'color': 'Maroon', 'price': 45000 },
            { 'id': 'fc074185', 'brand': 'BMW', 'year': 1962, 'color': 'Blue', 'price': 54000 },
            { 'id': '606ba663', 'brand': 'Honda', 'year': 1982, 'color': 'Blue', 'price': 22000 },
            { 'id': 'd05060b8', 'brand': 'Mercedes', 'year': 2003, 'color': 'Silver', 'price': 15000 },
            { 'id': '46e4bbe8', 'brand': 'Mercedes', 'year': 1986, 'color': 'White', 'price': 18000 },
            { 'id': 'c29da0d7', 'brand': 'BMW', 'year': 1983, 'color': 'Brown', 'price': 32000 },
            { 'id': '24622f70', 'brand': 'VW', 'year': 1973, 'color': 'Maroon', 'price': 36000 },
            { 'id': '7f573d2c', 'brand': 'Mercedes', 'year': 1991, 'color': 'Red', 'price': 21000 },
            { 'id': 'b69e6f5c', 'brand': 'Jaguar', 'year': 1993, 'color': 'Yellow', 'price': 16000 },
            { 'id': 'ead9bf1d', 'brand': 'Fiat', 'year': 1968, 'color': 'Maroon', 'price': 43000 },
            { 'id': 'bc58113e', 'brand': 'Renault', 'year': 1981, 'color': 'Silver', 'price': 36000 },
            { 'id': '2989d5b1', 'brand': 'Honda', 'year': 2006, 'color': 'Blue', 'price': 240000 },
            { 'id': 'c243e3a0', 'brand': 'Fiat', 'year': 1990, 'color': 'Maroon', 'price': 15000 },
            { 'id': 'e3d3ebf3', 'brand': 'Audi', 'year': 1996, 'color': 'White', 'price': 28000 },
            { 'id': '45337e7a', 'brand': 'Mercedes', 'year': 1982, 'color': 'Blue', 'price': 14000 },
            { 'id': '36e9cf7e', 'brand': 'Fiat', 'year': 2000, 'color': 'Orange', 'price': 26000 },
            { 'id': '036bf135', 'brand': 'Mercedes', 'year': 1973, 'color': 'Black', 'price': 22000 },
            { 'id': 'ad612e9f', 'brand': 'Mercedes', 'year': 1975, 'color': 'Red', 'price': 45000 },
            { 'id': '97c6e1e9', 'brand': 'Volvo', 'year': 1967, 'color': 'Green', 'price': 42000 },
            { 'id': 'ae962274', 'brand': 'Volvo', 'year': 1982, 'color': 'Red', 'price': 36000 },
            { 'id': '81f8972a', 'brand': 'BMW', 'year': 2007, 'color': 'Black', 'price': 56000 },
            { 'id': 'f8506743', 'brand': 'Audi', 'year': 1975, 'color': 'Blue', 'price': 42000 },
            { 'id': '596859d1', 'brand': 'Fiat', 'year': 2002, 'color': 'Green', 'price': 48000 },
            { 'id': 'd83c1d9a', 'brand': 'Volvo', 'year': 1972, 'color': 'Black', 'price': 29000 },
            { 'id': '32f41550', 'brand': 'Mercedes', 'year': 1978, 'color': 'Brown', 'price': 17000 },
            { 'id': 'c28cd2e4', 'brand': 'Volvo', 'year': 1982, 'color': 'Silver', 'price': 24000 },
            { 'id': '80890dcc', 'brand': 'Audi', 'year': 1962, 'color': 'White', 'price': 36000 },
            { 'id': '4bf1aeb5', 'brand': 'VW', 'year': 2000, 'color': 'Silver', 'price': 24000 },
            { 'id': '45ca4786', 'brand': 'BMW', 'year': 1995, 'color': 'Maroon', 'price': 50000 }
        ];
    };
    PrimengTableComponent.prototype.onYearChange = function (event, dt) {
        if (this.yearTimeout) {
            clearTimeout(this.yearTimeout);
        }
        this.yearTimeout = setTimeout(function () {
            dt.filter(event.value, 'year', 'gt');
        }, 250);
    };
    PrimengTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-primeng-table',
            template: __webpack_require__(/*! ./primeng-table.component.html */ "./src/app/primeng-table/primeng-table.component.html"),
            styles: [__webpack_require__(/*! ./primeng-table.component.css */ "./src/app/primeng-table/primeng-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrimengTableComponent);
    return PrimengTableComponent;
}());



/***/ }),

/***/ "./src/app/stacked-chart/stacked-chart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/stacked-chart/stacked-chart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWNrZWQtY2hhcnQvc3RhY2tlZC1jaGFydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/stacked-chart/stacked-chart.component.html":
/*!************************************************************!*\
  !*** ./src/app/stacked-chart/stacked-chart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"stack-chart\" style=\"width: 100%; height: 500px\"></div>\n"

/***/ }),

/***/ "./src/app/stacked-chart/stacked-chart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/stacked-chart/stacked-chart.component.ts ***!
  \**********************************************************/
/*! exports provided: StackedChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackedChartComponent", function() { return StackedChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StackedChartComponent = /** @class */ (function () {
    function StackedChartComponent() {
    }
    StackedChartComponent.prototype.ngOnInit = function () {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]('stack-chart', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
        // Add data
        chart.data = [{
                'year': '2016',
                'europe': 2.5,
                'namerica': 2.5,
                'asia': 2.1,
                'lamerica': 0.3,
                'meast': 0.2,
                'africa': 0.1
            }, {
                'year': '2017',
                'europe': 2.6,
                'namerica': 2.7,
                'asia': 2.2,
                'lamerica': 0.3,
                'meast': 0.3,
                'africa': 0.1
            }, {
                'year': '2018',
                'europe': 2.8,
                'namerica': 2.9,
                'asia': 2.4,
                'lamerica': 0.3,
                'meast': 0.3,
                'africa': 0.1
            }];
        // Create axes
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CategoryAxis"]());
        categoryAxis.dataFields.category = 'year';
        categoryAxis.renderer.grid.template.location = 0;
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
        valueAxis.renderer.inside = true;
        valueAxis.renderer.labels.template.disabled = true;
        valueAxis.min = 0;
        // Create series
        function createSeries(field, name) {
            // Set up series
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
            series.name = name;
            series.dataFields.valueY = field;
            series.dataFields.categoryX = 'year';
            series.sequencedInterpolation = true;
            // Make it stacked
            series.stacked = true;
            // Configure columns
            series.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](60);
            series.columns.template.tooltipText = '[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}';
            // Add label
            var labelBullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LabelBullet"]());
            labelBullet.label.text = '{valueY}';
            labelBullet.locationY = 0.5;
            return series;
        }
        createSeries('europe', 'Europe');
        createSeries('namerica', 'North America');
        createSeries('asia', 'Asia-Pacific');
        createSeries('lamerica', 'Latin America');
        createSeries('meast', 'Middle-East');
        createSeries('africa', 'Africa');
        // Legend
        chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["Legend"]();
        var title = chart.titles.create();
        title.text = 'Stacked Chart';
        title.marginBottom = 30;
        title.fontSize = 25;
    };
    StackedChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stacked-chart',
            template: __webpack_require__(/*! ./stacked-chart.component.html */ "./src/app/stacked-chart/stacked-chart.component.html"),
            styles: [__webpack_require__(/*! ./stacked-chart.component.css */ "./src/app/stacked-chart/stacked-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StackedChartComponent);
    return StackedChartComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/niawjunior/Desktop/allianz/ng-chart/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map