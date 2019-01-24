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

module.exports = "<div class=\"container\">\n  <div class=\"mt-5\">\n    <app-stacked-chart></app-stacked-chart>\n  </div>\n  <div class=\"mt-5\">\n    <app-bar-chart></app-bar-chart>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-5 mt-5\">\n      <app-gauge-chart></app-gauge-chart>\n    </div>\n    <div class=\"col-7 mt-5\">\n      <app-pie-chart></app-pie-chart>\n    </div>\n  </div>\n  <div class=\"mt-5\">\n    <app-map-chart></app-map-chart>\n  </div>\n  <div class=\"mt-5\">\n    <app-datatable></app-datatable>\n  </div>\n</div>\n"

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
                _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_8__["DatatableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"]
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

module.exports = "<table datatable class=\"row-border hover\">\n  <thead>\n    <tr>\n      <th>ID</th>\n      <th>Age</th>\n      <th>Name</th>\n      <th>Email</th>\n      <th>Phone</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of data\">\n      <td>{{ data.id }}</td>\n      <td class=\"text-danger\">{{ data.age }}</td>\n      <td>{{ data.name }}</td>\n      <td>{{ data.email }}</td>\n      <td class=\"text-white bg-secondary\">{{ data.phone }}</td>\n    </tr>\n  </tbody>\n</table>\n"

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
        this.data = [];
    }
    DatatableComponent.prototype.ngOnInit = function () {
        this.data = [
            {
                'id': '5c475094e944323ebffca885',
                'age': 20,
                'name': 'Reva Mclean',
                'email': 'revamclean@interfind.com',
                'phone': '+66 (083) 547-2172'
            },
            {
                'id': '5c4750943af6ade123fccf6f',
                'age': 21,
                'name': 'Winifred Poole',
                'email': 'winifredpoole@interfind.com',
                'phone': '+66 (083) 546-3877'
            },
            {
                'id': '5c475094cbbe8a1c2687a9d6',
                'age': 38,
                'name': 'Robertson Hardy',
                'email': 'robertsonhardy@interfind.com',
                'phone': '+66 (083) 457-3945'
            },
            {
                'id': '5c4750947d72b67ea4524723',
                'age': 29,
                'name': 'Meyer Montoya',
                'email': 'meyermontoya@interfind.com',
                'phone': '+66 (083) 479-2855'
            },
            {
                'id': '5c475094442ad1b513ccc990',
                'age': 22,
                'name': 'Gamble Riddle',
                'email': 'gambleriddle@interfind.com',
                'phone': '+66 (083) 509-2184'
            },
            {
                'id': '5c475094658a04d39c9c3243',
                'age': 22,
                'name': 'Hope Stewart',
                'email': 'hopestewart@interfind.com',
                'phone': '+66 (083) 541-3214'
            },
            {
                'id': '5c475094b796c333f50a5964',
                'age': 31,
                'name': 'Ellen Avery',
                'email': 'ellenavery@interfind.com',
                'phone': '+66 (083) 590-2839'
            },
            {
                'id': '5c475094eef20a20581e1e79',
                'age': 29,
                'name': 'Tyson Head',
                'email': 'tysonhead@interfind.com',
                'phone': '+66 (083) 484-2100'
            },
            {
                'id': '5c4750944d839612589de757',
                'age': 25,
                'name': 'Corinne Whitley',
                'email': 'corinnewhitley@interfind.com',
                'phone': '+66 (083) 532-3124'
            },
            {
                'id': '5c47509493d42821a19942a3',
                'age': 39,
                'name': 'Middleton Scott',
                'email': 'middletonscott@interfind.com',
                'phone': '+66 (083) 541-3394'
            },
            {
                'id': '5c475094187d8accae17ed9a',
                'age': 26,
                'name': 'Baxter Knight',
                'email': 'baxterknight@interfind.com',
                'phone': '+66 (083) 571-2834'
            },
            {
                'id': '5c47509487da2123878be896',
                'age': 28,
                'name': 'Sonya Graves',
                'email': 'sonyagraves@interfind.com',
                'phone': '+66 (083) 523-3422'
            },
            {
                'id': '5c475094198276e38d319fc2',
                'age': 34,
                'name': 'Weiss Macdonald',
                'email': 'weissmacdonald@interfind.com',
                'phone': '+66 (083) 521-3765'
            }
        ];
    };
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
        // Create map instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]('map-chart', _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapChart"]);
        // Set map definition
        chart.geodata = _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_3__["default"];
        // Set projection
        chart.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["projections"].Miller();
        // Series for World map
        var worldSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapPolygonSeries"]());
        worldSeries.exclude = ['AQ'];
        worldSeries.useGeodata = true;
        this.polygonTemplate = worldSeries.mapPolygons.template;
        this.polygonTemplate.tooltipText = '{name}';
        this.polygonTemplate.fill = chart.colors.getIndex(0);
        // Hover state
        this.hs = this.polygonTemplate.states.create('hover');
        this.hs.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#367B25');
        // Series for United States map
        var usaSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapPolygonSeries"]());
        usaSeries.geodata = _amcharts_amcharts4_geodata_usaLow__WEBPACK_IMPORTED_MODULE_4__["default"];
        var polygonTemplate = usaSeries.mapPolygons.template;
        polygonTemplate.tooltipText = '{name}';
        polygonTemplate.fill = chart.colors.getIndex(1);
        // Hover state
        var hs = polygonTemplate.states.create('hover');
        hs.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#367B25');
        var title = chart.titles.create();
        title.text = 'Map Chart';
        title.marginBottom = 90;
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

module.exports = __webpack_require__(/*! /Users/niawjunior/Desktop/ng-chart/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map