(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["responsivedefaults"],{

/***/ "./node_modules/@amcharts/amcharts4/.internal/core/responsive/ResponsiveDefaults.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/core/responsive/ResponsiveDefaults.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_axes_AxisRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../charts/axes/AxisRenderer */ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRenderer.js");
/* harmony import */ var _charts_axes_AxisRendererX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../charts/axes/AxisRendererX */ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRendererX.js");
/* harmony import */ var _charts_axes_AxisRendererY__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../charts/axes/AxisRendererY */ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRendererY.js");
/* harmony import */ var _charts_axes_AxisRendererCircular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../charts/axes/AxisRendererCircular */ "./node_modules/@amcharts/amcharts4/.internal/charts/axes/AxisRendererCircular.js");
/* harmony import */ var _charts_Chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../charts/Chart */ "./node_modules/@amcharts/amcharts4/.internal/charts/Chart.js");
/* harmony import */ var _charts_Legend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../charts/Legend */ "./node_modules/@amcharts/amcharts4/.internal/charts/Legend.js");
/* harmony import */ var _charts_map_SmallMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../charts/map/SmallMap */ "./node_modules/@amcharts/amcharts4/.internal/charts/map/SmallMap.js");
/* harmony import */ var _charts_map_ZoomControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../charts/map/ZoomControl */ "./node_modules/@amcharts/amcharts4/.internal/charts/map/ZoomControl.js");
/**
 * Defines default Responsive rules
 * @hidden
 */








/**
 * ============================================================================
 * RULES
 * ============================================================================
 * @hidden
 */
/**
 * Default rules.
 *
 * @ignore Exclude from docs
 * @todo Do not create states for objects that do not have any overrides
 */
/* harmony default export */ __webpack_exports__["default"] = ([
    /**
     * --------------------------------------------------------------------------
     * Microcharts and sparklines
     * W<=100 || H<=100
     * @todo
     */
    {
        relevant: function (container) {
            if ((container.pixelWidth <= 100) || (container.pixelHeight <= 100)) {
                return true;
            }
            return false;
        },
        state: function (object, stateId) {
            // Put vertical axis labels inside
            if (object instanceof _charts_axes_AxisRenderer__WEBPACK_IMPORTED_MODULE_0__["AxisRenderer"]) {
                var state = object.states.create(stateId);
                state.properties.minLabelPosition = 1;
                state.properties.maxLabelPosition = 0;
                return state;
            }
        }
    },
    /**
     * --------------------------------------------------------------------------
     * Narrow
     * W<=200
     */
    {
        relevant: function (container) {
            if ((container.pixelWidth <= 200)) {
                return true;
            }
            return false;
        },
        state: function (object, stateId) {
            // Put vertical axis labels inside
            if (object instanceof _charts_axes_AxisRendererY__WEBPACK_IMPORTED_MODULE_2__["AxisRendererY"]) {
                var state = object.states.create(stateId);
                state.properties.inside = true;
                return state;
            }
            if (object instanceof _charts_axes_AxisRendererCircular__WEBPACK_IMPORTED_MODULE_3__["AxisRendererCircular"]) {
                var state = object.states.create(stateId);
                state.properties.inside = true;
                return state;
            }
            if (object instanceof _charts_map_SmallMap__WEBPACK_IMPORTED_MODULE_6__["SmallMap"]) {
                var state = object.states.create(stateId);
                state.properties.disabled = true;
                return state;
            }
            /*if (object instanceof Container && object.parent instanceof ZoomControl && !(object instanceof Button)) {
                let state = object.states.create(stateId);
                state.properties.height = 0;
                return state;
            }*/
            if (object instanceof _charts_map_ZoomControl__WEBPACK_IMPORTED_MODULE_7__["ZoomControl"]) {
                var state = object.states.create(stateId);
                state.properties.layout = "vertical";
                return state;
            }
            if (object instanceof _charts_Chart__WEBPACK_IMPORTED_MODULE_4__["Chart"]) {
                var state = object.states.create(stateId);
                state.properties.marginLeft = 0;
                state.properties.marginRight = 0;
                return state;
            }
            if (object instanceof _charts_Legend__WEBPACK_IMPORTED_MODULE_5__["Legend"] && (object.position == "left" || object.position == "right")) {
                var state = object.states.create(stateId);
                state.properties.position = "bottom";
                return state;
            }
        }
    },
    /**
     * --------------------------------------------------------------------------
     * Short
     * H<=200
     */
    {
        relevant: function (container) {
            if ((container.pixelHeight <= 200)) {
                return true;
            }
            return false;
        },
        state: function (object, stateId) {
            // Put vertical axis labels inside
            if (object instanceof _charts_axes_AxisRendererX__WEBPACK_IMPORTED_MODULE_1__["AxisRendererX"]) {
                var state = object.states.create(stateId);
                state.properties.inside = true;
                return state;
            }
            if (object instanceof _charts_axes_AxisRendererCircular__WEBPACK_IMPORTED_MODULE_3__["AxisRendererCircular"]) {
                var state = object.states.create(stateId);
                state.properties.inside = true;
                return state;
            }
            if (object instanceof _charts_map_SmallMap__WEBPACK_IMPORTED_MODULE_6__["SmallMap"]) {
                var state = object.states.create(stateId);
                state.properties.disabled = true;
                return state;
            }
            /*if (object instanceof Container && object.parent instanceof ZoomControl && !(object instanceof Button)) {
                let state = object.states.create(stateId);
                state.properties.width = 100;
                return state;
            }*/
            if (object instanceof _charts_map_ZoomControl__WEBPACK_IMPORTED_MODULE_7__["ZoomControl"]) {
                var state = object.states.create(stateId);
                state.properties.layout = "horizontal";
                return state;
            }
            if (object instanceof _charts_Chart__WEBPACK_IMPORTED_MODULE_4__["Chart"]) {
                var state = object.states.create(stateId);
                state.properties.marginTop = 0;
                state.properties.marginBottom = 0;
                return state;
            }
            if (object instanceof _charts_Legend__WEBPACK_IMPORTED_MODULE_5__["Legend"] && (object.position == "bottom" || object.position == "top")) {
                var state = object.states.create(stateId);
                state.properties.position = "right";
                return state;
            }
        }
    },
    /**
     * --------------------------------------------------------------------------
     * Super-small
     * W<=200 && H<=200
     */
    {
        relevant: function (container) {
            if ((container.pixelWidth <= 200) && (container.pixelHeight <= 200)) {
                return true;
            }
            return false;
        },
        state: function (object, stateId) {
            // Hide legend
            if (object instanceof _charts_Legend__WEBPACK_IMPORTED_MODULE_5__["Legend"]) {
                var state = object.states.create(stateId);
                state.properties.disabled = true;
                return state;
            }
            if (object instanceof _charts_map_ZoomControl__WEBPACK_IMPORTED_MODULE_7__["ZoomControl"]) {
                var state = object.states.create(stateId);
                state.properties.disabled = true;
                return state;
            }
        }
    }
]);
//# sourceMappingURL=ResponsiveDefaults.js.map

/***/ })

}]);
//# sourceMappingURL=responsivedefaults.js.map