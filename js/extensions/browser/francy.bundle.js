(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(6);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var Renderer = function (_Base) {
  _inherits(Renderer, _Base);

  function Renderer(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Renderer);

    var _this = _possibleConstructorReturn(this, (Renderer.__proto__ || Object.getPrototypeOf(Renderer)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    if (new.target === Renderer) {
      throw new TypeError('Cannot construct [Renderer] instances directly!');
    }
    if (_this.render === undefined || typeof _this.render !== 'function') {
      throw new TypeError('Must override [render()] method!');
    }
    if (_this.unrender === undefined) {
      _this.logger.debug('No [unrender()] method specified...');
    }
    _this.element = undefined;
    _this.transitionDuration = 750; //ms
    return _this;
  }

  _createClass(Renderer, [{
    key: '_initialize',
    value: function _initialize() {}
  }, {
    key: 'HTMLParent',
    get: function get() {
      return this.options.appendTo.element.node().tagName.toLowerCase() === 'svg' ? d3.select(this.options.appendTo.element.node().parentNode) : this.options.appendTo.element;
    }
  }, {
    key: 'SVGParent',
    get: function get() {
      return this.options.appendTo.element.node().tagName.toLowerCase() === 'div' ? this.options.appendTo.element.select('svg') : this.options.appendTo.element;
    }
  }, {
    key: 'parent',
    get: function get() {
      return this.options.appendTo.element;
    }
  }, {
    key: 'margin',
    get: function get() {
      return { top: 50, right: 50, bottom: 50, left: 50 };
    }
  }, {
    key: 'width',
    get: function get() {
      var width = +this.parent.attr('width') || d3.select('body').node().getBoundingClientRect().width;
      return width - this.margin.left - this.margin.right;
    }
  }, {
    key: 'height',
    get: function get() {
      var height = +this.parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;
      return height - this.margin.top - this.margin.bottom;
    }
  }]);

  return Renderer;
}(_base2.default);

exports.default = Renderer;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requires = requires;
function requires(props) {
  return function decorator(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function () {
      if (!hasData(getProperty(this.data, props))) {
        this.logger.debug('No data here [' + props + '], nothing to render... continuing...');
        return;
      }
      return oldValue.apply(this, arguments);
    };

    return descriptor;
  };
}

function getProperty(obj, propertyPath) {

  var tmp = obj;

  if (tmp && propertyPath) {
    var properties = propertyPath.split('.');

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var property = _step.value;

        if (!tmp.hasOwnProperty(property)) {
          tmp = undefined;
          break;
        } else {
          tmp = tmp[property];
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return tmp;
}

function hasData(obj) {
  return obj && (obj instanceof Array && obj.length || obj instanceof Object && Object.values(obj).length);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = initialize;
function initialize(value) {
  return function (target, key, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function () {
      this._initialize();
      return oldValue.apply(this, arguments);
    };
    return descriptor;
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterMathJax = RegisterMathJax;
exports.RegisterJupyterKeyboardEvents = RegisterJupyterKeyboardEvents;
exports.syntaxHighlight = syntaxHighlight;

var _logger = __webpack_require__(7);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Jupyter, MathJax, d3 */

function RegisterMathJax(element) {
  if (!element) return;
  setTimeout(function () {
    try {
      MathJax.Hub.Config({
        tex2jax: {
          jax: ['input/TeX', 'output/SVG'],
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']],
          processEscapes: true
        }
      });

      MathJax.Hub.Register.StartupHook('End', function () {
        setTimeout(function () {
          element.selectAll('.francy-label').each(function () {
            var self = d3.select(this),
                mathJax = self.select('text>span>svg');
            if (mathJax.node()) {
              setTimeout(function () {
                mathJax.attr('x', self.attr('x'));
                mathJax.attr('y', -15);
                d3.select(self.node().parentNode).append(function () {
                  return mathJax.node();
                });
                self.selectAll('*').remove();
              }, 10);
            }
          });
        }, 250);
      });

      MathJax.Hub.Queue(['Typeset', MathJax.Hub, element.node()]);

      MathJax.Hub.Configured();
    } catch (e) {
      if (e.name === 'ReferenceError') {
        new _logger2.default().info('It seems MathJax is not loaded...', e);
      }
    }
  }, 10);
}

function RegisterJupyterKeyboardEvents(classes) {
  // disable keyboard shortcuts in Jupyter for classes
  if (!classes) return;
  try {
    classes.map(function (cl) {
      Jupyter.keyboard_manager.register_events(cl);
    });
  } catch (e) {
    if (e.name === 'ReferenceError') {
      new _logger2.default().info('It seems we\'re not running on Jupyter...', e);
    }
  }
}

// credits here: https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript#answer-7220510
function syntaxHighlight(json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
    var cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _tooltip = __webpack_require__(11);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var Chart = function (_Renderer) {
  _inherits(Chart, _Renderer);

  function Chart(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Chart);

    var _this = _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    _this.axis = undefined;
    _this.yScale = undefined;
    _this.xScale = undefined;
    _this.datasets = undefined;
    _this.datasetNames = undefined;
    _this.tooltip = undefined;
    return _this;
  }

  _createClass(Chart, [{
    key: '_initialize',
    value: function _initialize() {
      var _this2 = this;

      this.tooltip = new _tooltip2.default(this.options);

      this.element = this.parent.select('g.francy-content');

      this.axis = this.data.canvas.chart.axis;
      this.datasets = this.data.canvas.chart.data;
      this.datasetNames = Object.keys(this.datasets);

      this.xScale = d3.scaleLinear().range([0, this.width]).domain(this.axis.x.domain);
      this.yScale = d3.scaleLinear().range([this.height, 0]).domain(this.axis.y.domain);

      this.allValues = [];
      this.datasetNames.forEach(function (key) {
        return _this2.allValues = _this2.allValues.concat(_this2.datasets[key]);
      });

      if (!this.axis.y.domain.length) {
        this.yScale.domain([0, d3.max(this.allValues, function (d) {
          return d;
        })]);
      }

      if (!this.axis.x.domain.length) {
        this.xScale.domain([0, this.allValues.length / this.datasetNames.length]);
      }
    }
  }, {
    key: '_renderAxis',
    value: function _renderAxis() {
      // force rebuild axis again
      var xAxisGroup = this.element.selectAll('g.francy-x-axis');

      if (!xAxisGroup.node()) {
        xAxisGroup = this.element.append('g').attr('class', 'francy-x-axis');
      }

      xAxisGroup.selectAll('*').remove();

      // add the x Axis
      xAxisGroup.attr('transform', 'translate(0,' + this.height + ')').call(d3.axisBottom(this.xScale)).append('text').attr('dy', 50).attr('dx', this.width / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(this.axis.x.title);

      // force rebuild axis again
      var yAxisGroup = this.element.selectAll('g.francy-y-axis');

      if (!yAxisGroup.node()) {
        yAxisGroup = this.element.append('g').attr('class', 'francy-y-axis');
      }

      yAxisGroup.selectAll('*').remove();

      // add the y Axis
      yAxisGroup.call(d3.axisLeft(this.yScale)).append('text').attr('dx', -50).attr('dy', this.height / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(this.axis.y.title);
    }
  }, {
    key: '_renderLegend',
    value: function _renderLegend() {
      if (this.data.canvas.chart.showLegend) {

        var legendGroup = this.element.selectAll('.francy-legend');

        if (!legendGroup.node()) {
          legendGroup = this.element.append('g').attr('class', 'francy-legend');
        }

        // force rebuild legend again
        legendGroup.selectAll('*').remove();

        var legend = legendGroup.selectAll('g').data(this.datasetNames.slice());

        legend.exit().remove();

        legend = legend.enter().append('g').attr('transform', function (d, i) {
          return 'translate(0,' + i * 20 + ')';
        }).merge(legend);

        legend.append('rect').attr('x', this.width + 20).attr('width', 19).attr('height', 19).style('fill', function (d, i) {
          return Chart.colors(i * 5);
        });

        legend.append('text').attr('x', this.width + 80).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function (d) {
          return d;
        });
      }
    }
  }], [{
    key: 'tooltip',
    value: function tooltip(dataset, value) {
      return { 'A': { 'title': 'Dataset', 'text': dataset }, 'B': { 'title': 'Value', 'text': value } };
    }
  }, {
    key: 'domainRange',
    value: function domainRange(max) {
      return Array.from(new Array(max), function (_, i) {
        return i;
      }).map(function (x) {
        return x;
      });
    }
  }, {
    key: 'colors',
    get: function get() {
      return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
    }
  }]);

  return Chart;
}(_renderer2.default);

exports.default = Chart;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Composite = function (_Renderer) {
  _inherits(Composite, _Renderer);

  function Composite(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Composite);

    var _this = _possibleConstructorReturn(this, (Composite.__proto__ || Object.getPrototypeOf(Composite)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    if (new.target === Composite) {
      throw new TypeError('Cannot construct [Composite] instances directly!');
    }
    _this.renderers = [];
    return _this;
  }

  _createClass(Composite, [{
    key: 'add',
    value: function add(renderer) {
      this.renderers.push(renderer);
      return this;
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      // update children rendering with a new parent!
      var options = this.options;
      options.appendTo = this;
      // render other components
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.renderers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var renderer = _step.value;

          renderer.settings(options).load(this.data).render();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return Composite;
}(_renderer2.default);

exports.default = Composite;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(7);

var _logger2 = _interopRequireDefault(_logger);

var _jsonUtils = __webpack_require__(14);

var _jsonUtils2 = _interopRequireDefault(_jsonUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function () {
  function Base(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        _ref$appendTo = _ref.appendTo,
        appendTo = _ref$appendTo === undefined ? 'body' : _ref$appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Base);

    this.settings({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    /**
     * @type {Logger} the logger for this class
     */
    this.log = new _logger2.default(this.options);
  }

  _createClass(Base, [{
    key: 'settings',
    value: function settings(_ref2) {
      var verbose = _ref2.verbose,
          appendTo = _ref2.appendTo,
          callbackHandler = _ref2.callbackHandler;

      this.options = this.options || {};
      if (!this.options.callbackHandler && !callbackHandler) {
        throw new Error('A Callback Handler must be provided! This will be used to trigger events from the graphics produced...');
      }
      if (!this.options.appendTo && !appendTo) {
        throw new Error('Missing an element or id to append the graphics to...!');
      }
      /**
       * @typedef {Object} Options
       * @property {Boolean} verbose prints extra log information to console.log, default false
       * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
       * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
       */
      this.options.verbose = verbose || this.options.verbose;
      this.options.appendTo = appendTo || this.options.appendTo;
      this.options.callbackHandler = callbackHandler || this.options.callbackHandler;
      return this;
    }
  }, {
    key: 'load',
    value: function load(json, partial) {
      var data = _jsonUtils2.default.parse(json, partial);
      if (data) {
        this.data = data;
      }
      return this;
    }
  }, {
    key: 'logger',
    get: function get() {
      return this.log;
    }
  }]);

  return Base;
}();

exports.default = Base;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class provides a logger for the Francy application.
 */
var Logger = function () {

  /**
   * Logger constructor
   * @param verbose prints extra log information to console.log, defaults to false
   */
  function Logger() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Logger);

    this.verbose = verbose;
    this.console = console;
  }

  /**
   * Creates a [DEBUG] entry in the console log
   * @param message the message to print
   */


  _createClass(Logger, [{
    key: 'debug',
    value: function debug(message) {
      if (this.verbose) {
        this.console.debug(Logger._format('DEBUG', message));
      }
    }

    /**
     * Creates a [INFO] entry in the console log
     * @param message the message to print
     */

  }, {
    key: 'info',
    value: function info(message) {
      this.console.info(Logger._format('INFO', message));
    }

    /**
     * Creates a [ERROR] entry in the console log
     * @param message the message to print
     * @param error the error Object to attach to the message
     */

  }, {
    key: 'error',
    value: function error(message, _error) {
      this.console.error(Logger._format('ERROR', message), _error);
    }

    /**
     * Creates a [WARN] entry in the console log
     * @param message the message to print
     * @param error the error Object to attach to the message
     */

  }, {
    key: 'warn',
    value: function warn(message, error) {
      error = error || {};
      this.console.error(Logger._format('WARN', message), error);
    }

    /**
     * This is a private method that formats all log messages
     * @param level the log level
     * @param message the message to print
     */

  }], [{
    key: '_format',
    value: function _format(level, message) {
      return '[' + level + '] - ' + new Date().toISOString() + ' - ' + message;
    }
  }]);

  return Logger;
}();

exports.default = Logger;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _menuContext = __webpack_require__(18);

var _menuContext2 = _interopRequireDefault(_menuContext);

var _tooltip = __webpack_require__(11);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _callback = __webpack_require__(10);

var _callback2 = _interopRequireDefault(_callback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var Graph = function (_Renderer) {
  _inherits(Graph, _Renderer);

  function Graph(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Graph);

    return _possibleConstructorReturn(this, (Graph.__proto__ || Object.getPrototypeOf(Graph)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Graph, [{
    key: '_initialize',
    value: function _initialize() {
      this.element = this.parent.select('g.francy-content');
    }
  }, {
    key: '_applyEvents',
    value: function _applyEvents(element) {
      if (!element) return;

      var tooltip = new _tooltip2.default(this.options);
      var contextMenu = new _menuContext2.default(this.options);
      var callback = new _callback2.default(this.options);

      element.on('contextmenu', function (d) {
        d = d.data || d;
        // default, build context menu
        contextMenu.load(d, true).render();
        // any callbacks will be handled here
        executeCallback.call(this, d, 'contextmenu');
      }).on('click', function (d) {
        d = d.data || d;
        // any callbacks will be handled here
        executeCallback.call(this, d, 'click');
      }).on('dblclick', function (d) {
        d = d.data || d;
        // any callbacks will be handled here
        executeCallback.call(this, d, 'dblclick');
      }).on('mouseenter', function (d) {
        d = d.data || d;
        // default, show tooltip
        tooltip.load(d.messages, true).render();
      }).on('mouseleave', function () {
        // default, hide tooltip
        tooltip.unrender();
      });

      function executeCallback(data, event) {
        if (data.callbacks) {
          Object.values(data.callbacks).forEach(function (cb) {
            // execute the ones that match the event!
            cb.trigger === event && callback.load({ callback: cb }, true).execute();
          });
        }
      }
    }
  }], [{
    key: 'getSymbol',
    value: function getSymbol(type) {

      var element = undefined;
      switch (type) {
        case 'cross':
          element = d3.symbolCross;
          break;
        case 'diamond':
          element = d3.symbolDiamond;
          break;
        case 'square':
          element = d3.symbolSquare;
          break;
        case 'triangle':
          element = d3.symbolTriangle;
          break;
        case 'star':
          element = d3.symbolStar;
          break;
        case 'wye':
          element = d3.symbolWye;
          break;
        case 'circle':
        default:
          element = d3.symbolCircle;
      }

      return element;
    }
  }, {
    key: 'colors',
    get: function get() {
      return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
    }
  }]);

  return Graph;
}(_renderer2.default);

exports.default = Graph;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _callback = __webpack_require__(10);

var _callback2 = _interopRequireDefault(_callback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Renderer) {
  _inherits(Menu, _Renderer);

  function Menu(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Menu, [{
    key: 'traverse',
    value: function traverse(appendTo, menusIterator) {
      var _this2 = this;

      while (menusIterator.hasNext()) {
        var menuItem = menusIterator.next();
        var entry = appendTo.append('li');
        var action = entry.selectAll('a').data([menuItem]).enter().append('a').attr('title', menuItem.title).html(menuItem.title);
        if (menuItem.callback && Object.values(menuItem.callback).length) {
          action.on('click', function (d) {
            return new _callback2.default(_this2.options).load(d, true).execute();
          });
        }
        if (menuItem.menus && Object.values(menuItem.menus).length > 0) {
          var content = entry.append('ul');
          var subMenusIterator = this.iterator(Object.values(menuItem.menus));
          this.traverse(content, subMenusIterator);
        }
      }
    }
  }, {
    key: 'iterator',
    value: function iterator(array) {
      var nextIndex = 0;
      return {
        next: function next() {
          return this.hasNext() ? array[nextIndex++] : undefined;
        },
        hasNext: function hasNext() {
          return nextIndex < array.length;
        }
      };
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return Menu;
}(_renderer2.default);

exports.default = Menu;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _base = __webpack_require__(6);

var _base2 = _interopRequireDefault(_base);

var _modalRequired = __webpack_require__(19);

var _modalRequired2 = _interopRequireDefault(_modalRequired);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var CallbackHandler = (_dec = (0, _dataDecorator.requires)('callback'), (_class = function (_Base) {
  _inherits(CallbackHandler, _Base);

  function CallbackHandler(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, CallbackHandler);

    var _this = _possibleConstructorReturn(this, (CallbackHandler.__proto__ || Object.getPrototypeOf(CallbackHandler)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    _this.callback = callbackHandler;
    return _this;
  }

  _createClass(CallbackHandler, [{
    key: 'execute',
    value: function execute() {
      var _this2 = this;

      if (Object.keys(this.data.callback.requiredArgs).length) {
        var options = this.options;
        options.callbackHandler = function (callbackObj) {
          return _this2._execute.call(_this2, callbackObj);
        };
        return new _modalRequired2.default(options).load(this.data, true).render();
      }

      // Trigger is the expected command on GAP for this events!
      this._execute(this.data.callback);
    }
  }, {
    key: '_execute',
    value: function _execute(calbackObj) {
      this.callback('Trigger(' + JSON.stringify(JSON.stringify(calbackObj)) + ');');
    }
  }]);

  return CallbackHandler;
}(_base2.default), (_applyDecoratedDescriptor(_class.prototype, 'execute', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'execute'), _class.prototype)), _class));
exports.default = CallbackHandler;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var Tooltip = (_dec = (0, _dataDecorator.requires)(), (_class = function (_Renderer) {
  _inherits(Tooltip, _Renderer);

  function Tooltip(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Tooltip, [{
    key: 'render',
    value: function render() {

      this.element = this.HTMLParent.select('div.francy-tooltip-holder');
      // check if the window is already present
      if (!this.element.node()) {
        this.element = this.HTMLParent.append('div').attr('class', 'francy-tooltip-holder');
      }

      // check if it exists already
      if (this.element.selectAll('*').node()) {
        return;
      }

      var pos = d3.mouse(this.SVGParent.node());

      // TODO fix always visible tooltip, fine until someone complains about :P
      this.element.style('left', pos[0] + 5 + 'px').style('top', pos[1] - 5 + 'px');

      var table = this.element.append('div').attr('class', 'francy-tooltip').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');
      var self = this;
      Object.keys(this.data).map(function (key) {
        var row = table.append('div').attr('class', 'francy-table-row');
        row.append('div').attr('class', 'francy-table-cell').text(self.data[key].title);
        row.append('div').attr('class', 'francy-table-cell').text(self.data[key].text);
      });

      // show tooltip
      this.element.style('display', 'block');

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {
      if (this.element) {
        this.element.selectAll('*').remove();
        this.element.style('display', null);
      }
    }
  }]);

  return Tooltip;
}(_renderer2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = Tooltip;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _frame = __webpack_require__(13);

var _frame2 = _interopRequireDefault(_frame);

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var ALL_CANVAS = {};

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.load} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 *  
 * @access public
 * 
 * @version 0.5.0
 * 
 * @example
 * let francy = new Francy({verbose: true, appendTo: '#div-id', callbackHandler: console.log});
 * francy.load(json).render();
 */
var Francy = (_dec = (0, _dataDecorator.requires)('canvas'), (_class = function (_Renderer) {
  _inherits(Francy, _Renderer);

  /**
   * Creates an instance of Francy with the following options:
   * @typedef {Object} Options
   * @property {Boolean} verbose prints extra log information to console.log, default false
   * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
   * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
   */
  function Francy(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Francy);

    var _this = _possibleConstructorReturn(this, (Francy.__proto__ || Object.getPrototypeOf(Francy)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    if (!d3) {
      throw new Error('D3 is not imported! Francy won\'t work without it... please import D3 v4+.');
    }
    return _this;
  }

  /**
   * Main entry point. Calling render passing a json representation string will 
   * trigger the drawing of a json object.
   * @returns {Object} the html element created
   */


  _createClass(Francy, [{
    key: 'render',
    value: function render() {
      var frame = new _frame2.default(this.options).load(this.data).render();
      ALL_CANVAS[this.data.canvas.id] = frame;
      return frame.element.node();
    }
  }], [{
    key: 'unrender',
    value: function unrender(id) {
      delete ALL_CANVAS[id];
    }
  }]);

  return Francy;
}(_renderer2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = Francy;


try {
  exports.Francy = window.Francy = Francy;
  // handle events on resize
  var oldResize = window.onresize;
  window.onresize = function () {
    // zoom to fit all canvas on resize
    Object.values(ALL_CANVAS).forEach(function (frame) {
      frame.canvas.zoomToFit();
    });
    // call old resize function if any!
    if (typeof oldResize === 'function') {
      oldResize();
    }
  };
} catch (e) {
  exports.Francy = Francy;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _composite = __webpack_require__(5);

var _composite2 = _interopRequireDefault(_composite);

var _canvas = __webpack_require__(15);

var _canvas2 = _interopRequireDefault(_canvas);

var _menuMain = __webpack_require__(25);

var _menuMain2 = _interopRequireDefault(_menuMain);

var _message = __webpack_require__(29);

var _message2 = _interopRequireDefault(_message);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var Frame = (_dec = (0, _dataDecorator.requires)('canvas'), (_class = function (_Composite) {
  _inherits(Frame, _Composite);

  function Frame(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Frame);

    var _this = _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    _this.canvas = new _canvas2.default(_this.options);
    _this.menu = new _menuMain2.default(_this.options);
    _this.messages = new _message2.default(_this.options);
    _this.add(_this.messages).add(_this.menu).add(_this.canvas);
    return _this;
  }

  _createClass(Frame, [{
    key: 'render',
    value: function render() {
      var parent = d3.select(this.options.appendTo);

      var frameId = 'Frame-' + this.data.canvas.id;
      this.element = d3.select('div#' + frameId);
      // check if the canvas is already present
      if (!this.element.node()) {
        // create a svg element detached from the DOM!
        this.logger.debug('Creating Frame [' + frameId + ']...');
        this.element = parent.append('div').attr('class', 'francy').attr('id', frameId);
      }

      // cannot continue if canvas is not present
      if (!this.element.node()) {
        throw new Error('Oops, could not create frame with id [' + frameId + ']... Cannot proceed.');
      }

      this.logger.debug('Frame updated [' + frameId + ']...');

      this.renderChildren();

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return Frame;
}(_composite2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = Frame;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class contains methods to deal with JSON.
 */
var JsonUtils = function () {
  function JsonUtils() {
    _classCallCheck(this, JsonUtils);
  }

  _createClass(JsonUtils, null, [{
    key: 'parse',


    /**
     * Parses an input nd checks whether this input is valid and returns a JSON object.
     * @param input - the input to parse
     * @param partial - if the input is not a complete Francy JSON Object, defaults to false
     * @returns {json} - if the input is a valid JSON object, otherwise returns {undefined}
     */
    value: function parse(input) {
      var partial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!input) return;
      input = typeof input !== 'string' ? JSON.stringify(input) : input;
      input = input.replace(/[\n\r\b\\]+|(gap>)/g, '');
      var jsonRegex = /{(?:[^])*}/g;
      var match = jsonRegex.exec(input);
      if (match) {
        input = match[0];
        try {
          var json = JSON.parse(input);
          return json.mime === JsonUtils.MIME || partial ? json : undefined;
        } catch (e) {
          /* eslint-disable no-console */
          console.error(e);
          /* eslint-enable no-console */
        }
      }
    }

    /**
     * Returns a static string representing the mime type supported by this package
     */

  }, {
    key: 'MIME',
    get: function get() {
      return 'application/vnd.francy+json';
    }
  }]);

  return JsonUtils;
}();

exports.default = JsonUtils;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _composite = __webpack_require__(5);

var _composite2 = _interopRequireDefault(_composite);

var _graphFactory = __webpack_require__(16);

var _graphFactory2 = _interopRequireDefault(_graphFactory);

var _chartFactory = __webpack_require__(21);

var _chartFactory2 = _interopRequireDefault(_chartFactory);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var Canvas = (_dec = (0, _dataDecorator.requires)('canvas'), (_class = function (_Composite) {
  _inherits(Canvas, _Composite);

  function Canvas(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Canvas);

    var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    _this.graph = new _graphFactory2.default(_this.options);
    _this.chartFactory = new _chartFactory2.default(_this.options);
    _this.add(_this.graph).add(_this.chartFactory);
    return _this;
  }

  _createClass(Canvas, [{
    key: 'render',
    value: function render() {
      var content = void 0;
      var zoom = d3.zoom();
      var self = this;

      function updateZoom(translateX, translateY, scale) {
        self.element.call(zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(scale, scale));
      }

      function zoomed() {
        content.attr('transform', d3.event.transform);
      }

      function stopped() {
        if (d3.event.defaultPrevented) {
          d3.event.stopPropagation();
        }
      }

      function zoomToFit() {
        // only execute if enable, of course
        if (self.data.canvas.zoomToFit) {
          var bounds = content.node().getBBox();

          var clientBounds = self.element.node().getBoundingClientRect(),
              fullWidth = clientBounds.right - clientBounds.left,
              fullHeight = clientBounds.bottom - clientBounds.top;

          var width = +bounds.width,
              height = +bounds.height;

          if (width === 0 || height === 0) return;

          var midX = bounds.x + width / 2,
              midY = bounds.y + height / 2;

          var scale = 0.9 / Math.max(width / fullWidth, height / fullHeight);
          var translateX = fullWidth / 2 - scale * midX,
              translateY = fullHeight / 2 - scale * midY;

          content.transition().duration(self.transitionDuration).attr('transform', 'translate(' + translateX + ',' + translateY + ')scale(' + scale + ',' + scale + ')').on('end', function () {
            return updateZoom(translateX, translateY, scale);
          });
        }
      }

      var canvasId = 'Canvas-' + this.data.canvas.id;
      this.element = d3.select('svg#' + canvasId);
      // check if the canvas is already present
      if (!this.element.node()) {
        // create a svg element detached from the DOM!
        this.logger.debug('Creating Canvas [' + canvasId + ']...');
        this.element = this.parent.append('svg').attr('class', 'francy-canvas').attr('id', canvasId);
      }

      // cannot continue if canvas is not present
      if (!this.element.node()) {
        throw new Error('Oops, could not create canvas with id [' + canvasId + ']... Cannot proceed.');
      }

      this.element.attr('width', this.data.canvas.width).attr('height', this.data.canvas.height);

      content = this.element.select('g.francy-content');

      if (!content.node()) {
        content = this.element.append('g').attr('class', 'francy-content');
        zoom.on('zoom', zoomed);
        // remove zoom on double click!
        this.element.call(zoom).on('dblclick.zoom', null);
      }

      this.element.on('click', stopped, true);

      this.element.zoomToFit = this.zoomToFit = zoomToFit;

      this.logger.debug('Canvas updated [' + canvasId + ']...');

      this.renderChildren();

      setTimeout(function () {
        zoomToFit();
      }, this.transitionDuration);

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return Canvas;
}(_composite2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = Canvas;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _graphTree = __webpack_require__(17);

var _graphTree2 = _interopRequireDefault(_graphTree);

var _graphGeneric = __webpack_require__(20);

var _graphGeneric2 = _interopRequireDefault(_graphGeneric);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Graph = (_dec = (0, _dataDecorator.requires)('canvas.graph'), (_class = function (_Renderer) {
  _inherits(Graph, _Renderer);

  function Graph(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Graph);

    return _possibleConstructorReturn(this, (Graph.__proto__ || Object.getPrototypeOf(Graph)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Graph, [{
    key: 'render',
    value: function render() {

      var element = undefined;
      switch (this.data.canvas.graph.type) {
        case 'tree':
          element = new _graphTree2.default(this.options).load(this.data).render();
          break;
        default:
          element = new _graphGeneric2.default(this.options).load(this.data).render();
      }

      return element;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return Graph;
}(_renderer2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = Graph;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _graph = __webpack_require__(8);

var _graph2 = _interopRequireDefault(_graph);

var _component = __webpack_require__(3);

var _initializeDecorator = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var TreeGraph = (_dec = (0, _initializeDecorator.initialize)(), (_class = function (_Graph) {
  _inherits(TreeGraph, _Graph);

  function TreeGraph(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, TreeGraph);

    return _possibleConstructorReturn(this, (TreeGraph.__proto__ || Object.getPrototypeOf(TreeGraph)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(TreeGraph, [{
    key: 'render',
    value: function render() {

      var i = 0,
          root = void 0;

      root = d3.hierarchy(this.treeData, function (d) {
        return d.children;
      });
      root.x0 = this.height / 2;
      root.y0 = 0;

      // compute height based on the depth of the graph
      var levelWidth = [1];
      var childCount = function childCount(level, n) {

        if (n.children && n.children.length > 0) {
          if (levelWidth.length <= level + 1) levelWidth.push(0);

          levelWidth[level + 1] += n.children.length;
          n.children.forEach(function (d) {
            childCount(level + 1, d);
          });
        }
      };
      childCount(0, root);
      var newHeight = d3.max(levelWidth) * 100;

      var treemap = d3.tree().size([newHeight, this.width]);

      if (this.data.canvas.graph.collapsed) {
        root.children.forEach(collapse);
      }

      update.call(this, root);

      function collapse(d) {
        if (d.children) {
          d._children = d.children;
          d._children.forEach(collapse);
          d.children = null;
        }
      }

      function update(source) {
        var _this2 = this;

        var treeData = treemap(root);

        var nodes = treeData.descendants(),
            links = treeData.descendants().slice(1);

        nodes.forEach(function (d) {
          return d.y = d.depth * 180;
        });

        var linkGroup = this.element.selectAll('g.francy-links');

        if (!linkGroup.node()) {
          linkGroup = this.element.append('g').attr('class', 'francy-links');
        }

        var link = linkGroup.selectAll('path.francy-edge').data(links, function (d) {
          return d.id || (d.id = ++i);
        });

        var linkEnter = link.enter().append('path').attr('class', 'francy-edge').attr('d', function () {
          var o = { x: source.x0, y: source.y0 };
          return diagonal(o, o);
        });

        linkEnter.merge(link).transition().duration(this.transitionDuration).attr('d', function (d) {
          return diagonal(d, d.parent);
        });

        link.exit().transition().duration(this.transitionDuration).attr('d', function () {
          var o = { x: source.x, y: source.y };
          return diagonal(o, o);
        }).remove();

        linkGroup.selectAll('path.francy-edge').style('fill', 'none').style('stroke', '#ccc').style('stroke-width', '1px');

        nodes.forEach(function (d) {
          d.x0 = d.x;
          d.y0 = d.y;
        });

        function diagonal(s, d) {
          return 'M ' + s.y + ' ' + s.x + '\n            C ' + (s.y + d.y) / 2 + ' ' + s.x + ',\n              ' + (s.y + d.y) / 2 + ' ' + d.x + ',\n              ' + d.y + ' ' + d.x;
        }

        var nodeGroup = this.element.selectAll('g.francy-nodes');

        if (!nodeGroup.node()) {
          nodeGroup = this.element.append('g').attr('class', 'francy-nodes');
        }

        var node = nodeGroup.selectAll('g.francy-node').data(nodes, function (d) {
          return d.id || (d.id = ++i);
        });

        var nodeEnter = node.enter().append('g').attr('class', 'francy-node').attr('transform', function () {
          return 'translate(' + source.y0 + ',' + source.x0 + ')';
        });

        nodeEnter.append('path').attr('d', d3.symbol().type(function (d) {
          return _graph2.default.getSymbol(d.data.type);
        }).size(function (d) {
          return d.data.size * 100;
        })).attr('class', 'francy-symbol');

        nodeEnter.append('text').attr('class', 'francy-label').attr('x', function (d) {
          return -(d.data.title.length * 2.5);
        }).style('cursor', function (d) {
          return d.children || d._children ? 'pointer' : 'default';
        }).text(function (d) {
          return d.data.title;
        });

        var nodeUpdate = nodeEnter.merge(node);

        nodeUpdate.transition().duration(this.transitionDuration).attr('transform', function (d) {
          return 'translate(' + d.y + ',' + d.x + ')';
        });

        node.exit().transition().duration(this.transitionDuration).attr('transform', function () {
          return 'translate(' + source.y + ',' + source.x + ')';
        }).remove();

        nodeGroup.selectAll('path.francy-symbol').style('fill', function (d) {
          return d.children || d._children ? 'lightsteelblue' : _graph2.default.colors(d.data.layer * 5);
        }).style('cursor', function (d) {
          return d.children || d._children ? 'pointer' : 'default';
        });

        node = nodeGroup.selectAll('g.francy-node');

        if (node.node()) {
          this._applyEvents(node);

          var nodeOnClick = node.on('click');
          node.on('click', function (d) {
            // any callbacks will be handled here
            nodeOnClick.call(_this2, d.data);
            // default, highlight connected nodes
            click.call(_this2, d);
          });
        }

        // Toggle children on click.
        var self = this;

        function click(d) {
          if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }
          update.call(self, d);
        }

        (0, _component.RegisterMathJax)(this.SVGParent);

        setTimeout(function () {
          _this2.parent.zoomToFit();
        }, this.transitionDuration);
      }

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}

    /**
     * Transforms flat data into tree data by analysing the parents of each node
     * @returns {Object} the data transformed in tree data
     */

  }, {
    key: 'treeData',
    get: function get() {
      var canvasNodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [];
      var dataMap = canvasNodes.reduce(function (map, node) {
        map[node.id] = node;
        return map;
      }, {});
      var treeData = [];
      canvasNodes.forEach(function (node) {
        var parent = dataMap[node.parent];
        if (parent) {
          (parent.children || (parent.children = [])).push(node);
        } else {
          treeData.push(node);
        }
      });
      return treeData[0];
    }
  }]);

  return TreeGraph;
}(_graph2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = TreeGraph;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _menu = __webpack_require__(9);

var _menu2 = _interopRequireDefault(_menu);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var ContextMenu = (_dec = (0, _dataDecorator.requires)('menus'), (_class = function (_Menu) {
  _inherits(ContextMenu, _Menu);

  function ContextMenu(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, ContextMenu);

    return _possibleConstructorReturn(this, (ContextMenu.__proto__ || Object.getPrototypeOf(ContextMenu)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(ContextMenu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      d3.event.preventDefault();

      this.element = this.HTMLParent.select('div.francy-context-menu-holder');
      // check if the window is already present
      if (!this.element.node()) {
        this.element = this.HTMLParent.append('div').attr('class', 'francy-context-menu-holder');
      }

      var pos = d3.mouse(this.SVGParent.node());

      this.element.style('left', pos[0] + 5 + 'px').style('top', pos[1] + 5 + 'px');

      // show the context menu
      this.element.style('display', 'block');

      // check if it exists already
      if (this.element.selectAll('*').node()) {
        return;
      }

      // destroy menu
      d3.select('body').on('click.francy-context-menu', function () {
        return _this2.unrender();
      });

      // this gets executed when a contextmenu event occurs
      var menu = this.element.append('div').attr('class', 'francy-context-menu').append('ul');
      var menusIterator = this.iterator(Object.values(this.data.menus));
      this.traverse(menu, menusIterator);

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {
      if (this.element) {
        this.element.selectAll('*').remove();
        this.element.style('display', null);
      }
    }
  }]);

  return ContextMenu;
}(_menu2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = ContextMenu;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _component = __webpack_require__(3);

var _initializeDecorator = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var RequiredArgsModal = (_dec = (0, _initializeDecorator.initialize)(), (_class = function (_Renderer) {
  _inherits(RequiredArgsModal, _Renderer);

  function RequiredArgsModal(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, RequiredArgsModal);

    return _possibleConstructorReturn(this, (RequiredArgsModal.__proto__ || Object.getPrototypeOf(RequiredArgsModal)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(RequiredArgsModal, [{
    key: 'render',
    value: function render() {
      var self = this;

      var modalId = this.data.callback.id;

      this.logger.debug('Creating Callback Modal [' + modalId + ']...');

      this.element = this.holder.append('div').attr('id', modalId).attr('class', 'francy-modal');

      var form = this.element.append('form');

      var header = form.append('div').attr('class', 'francy-modal-header');

      var headerTitle = header.append('span').html('Required arguments&nbsp;');
      if (this.data.title) {
        headerTitle.append('span').attr('style', 'font-weight: bold;').text('for ' + this.data.title);
      }

      var content = form.append('div').attr('class', 'francy-modal-content').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.values(this.data.callback.requiredArgs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var arg = _step.value;

          var row = content.append('div').attr('class', 'francy-table-row');
          row.append('div').attr('class', 'francy-table-cell').append('label').attr('for', arg.id).text(arg.title);
          var input = row.append('div').attr('class', 'francy-table-cell').append('input').attr('id', arg.id).attr('class', 'francy-arg').attr('required', '').attr('name', arg.id).attr('type', arg.type).attr('value', arg.value).on('change', function () {
            self.data.callback.requiredArgs[this.id].value = this.value;
          }).on('input', this.onchange).on('keyup', this.onchange).on('paste', this.onchange);
          // wait, if it is boolean we create a checkbox
          if (arg.type === 'boolean') {
            // well, a checkbox works this way so we need to initialize 
            // the value to false and update the value based on the checked 
            // property that triggers the onchange event
            arg.value = arg.value || false;
            input.attr('type', 'checkbox').attr('required', null).attr('value', arg.value).on('change', function () {
              self.data.callback.requiredArgs[this.id].value = this.value = this.checked;
            });
          }
          row.append('span').attr('class', 'validity');
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var footer = form.append('div').attr('class', 'francy-modal-footer');

      footer.append('button').text('Ok').on('click', function () {
        if (form.node().checkValidity()) {
          d3.event.preventDefault();
          self.options.callbackHandler(self.data.callback);
          self.unrender();
        }
        return false;
      });
      footer.append('button').text('Cancel').on('click', this.unrender);

      // disable keyboard shortcuts when using this modal in Jupyter
      (0, _component.RegisterJupyterKeyboardEvents)(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);

      var inputElement = content.selectAll('.francy-arg').node();
      if (inputElement) {
        inputElement.focus();
      }

      this.logger.debug('Callback Modal updated [' + modalId + ']...');

      return this;
    }
  }]);

  return RequiredArgsModal;
}(_renderer2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = RequiredArgsModal;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _graph = __webpack_require__(8);

var _graph2 = _interopRequireDefault(_graph);

var _component = __webpack_require__(3);

var _initializeDecorator = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var GenericGraph = (_dec = (0, _initializeDecorator.initialize)(), (_class = function (_Graph) {
  _inherits(GenericGraph, _Graph);

  function GenericGraph(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, GenericGraph);

    return _possibleConstructorReturn(this, (GenericGraph.__proto__ || Object.getPrototypeOf(GenericGraph)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(GenericGraph, [{
    key: 'render',
    value: function render() {
      var self = this;

      var simulationActive = this.data.canvas.graph.simulation;

      var canvasNodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [],
          canvasLinks = this.data.canvas.graph.links ? Object.values(this.data.canvas.graph.links) : [];

      var linkGroup = this.element.selectAll('g.francy-links');

      if (!linkGroup.node()) {
        linkGroup = this.element.append('g').attr('class', 'francy-links');
      }

      var links = linkGroup.selectAll('g.francy-link').data();
      var linksToAdd = this._filterNewElements(canvasLinks, links);

      var link = linkGroup.selectAll('g.francy-link').data(linksToAdd, function (d) {
        return d.id;
      });

      var nodeGroup = this.element.selectAll('g.francy-nodes');

      if (!nodeGroup.node()) {
        nodeGroup = this.element.append('g').attr('class', 'francy-nodes');
      }

      var nodes = nodeGroup.selectAll('g.francy-node').data();
      var nodesToAdd = this._filterNewElements(canvasNodes, nodes);

      var node = nodeGroup.selectAll('g.francy-node').data(nodesToAdd, function (d) {
        return d.id;
      });

      if (node.exit().data().length === 0 && node.enter().data().length === 0 && link.enter().data().length === 0 && link.exit().data().length === 0) {
        return;
      }

      var linkEnter = link.enter().append('g').attr('class', 'francy-link');

      linkEnter.append('line').attr('class', 'francy-edge');

      link.exit().remove();

      link = linkGroup.selectAll('g.francy-link line.francy-edge');

      if (this.data.canvas.graph.type === 'directed') {
        // this means we need arrows, so we append the marker
        self.parent.append('defs').selectAll('marker').data(['arrow']).enter().append('marker').attr('class', 'francy-arrows').attr('id', function (d) {
          return d;
        }).attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0).attr('markerWidth', 10).attr('markerHeight', 10).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5 L10,0 L0, -5');
        // update the style of the link
        link.style('marker-end', 'url(#arrow)');
      }

      var nodeEnter = node.enter().append('g').attr('class', 'francy-node').attr('id', function (d) {
        return d.id;
      });

      nodeEnter.append('path').attr('d', d3.symbol().type(function (d) {
        return _graph2.default.getSymbol(d.type);
      }).size(function (d) {
        return d.size * 100;
      })).style('fill', function (d) {
        return _graph2.default.colors(d.layer * 5);
      }).attr('class', function (d) {
        return 'francy-symbol' + (d.highlight ? ' francy-highlight' : '') + (Object.values(d.menus).length ? ' francy-context' : '');
      });

      nodeEnter.append('text').attr('class', 'francy-label').attr('x', function (d) {
        return -(d.title.length * 2.5);
      }).text(function (d) {
        return d.title;
      });

      node.exit().remove();

      node = nodeGroup.selectAll('g.francy-node');

      if (this.data.canvas.graph.drag) {
        node.call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended));
      }

      if (node && !node.empty()) {

        this._applyEvents(node);

        if (this.data.canvas.graph.showNeighbours) {
          var nodeOnClick = node.on('click');
          node.on('click', function (d) {
            // default, highlight connected nodes
            connectedNodes.call(this);
            // any callbacks will be handled here
            nodeOnClick.call(this, d);
          });
        }
      }

      if (simulationActive) {
        //iterate through the data and recalculate its size
        node.each(function (d) {
          var bound = this.getBBox();
          return d.size = bound.width;
        });
        // Canvas Forces
        var centerForce = d3.forceCenter().x(this.width / 2).y(this.height / 2);
        var manyForce = d3.forceManyBody().strength(-canvasNodes.length * 50);
        var linkForce = d3.forceLink(canvasLinks).id(function (d) {
          return d.id;
        }).distance(50);
        var collideForce = d3.forceCollide(function (d) {
          return d.size;
        });

        //Generic gravity for the X position
        var forceX = d3.forceX(this.width / 2).strength(0.05);

        //Generic gravity for the Y position - undirected/directed graphs fall here
        var forceY = d3.forceY(this.height / 2).strength(0.25);

        if (this.data.canvas.graph.type === 'hasse') {
          //Generic gravity for the X position
          forceX = d3.forceX(this.width / 2).strength(0.3);
          //Strong y positioning based on layer to simulate the hasse diagram
          forceY = d3.forceY(function (d) {
            return d.layer * 75;
          }).strength(0.7);
        }

        var simulation = d3.forceSimulation().nodes(nodesToAdd).force('charge', manyForce).force('link', linkForce).force('center', centerForce).force('x', forceX).force('y', forceY).force('collide', collideForce).on('tick', ticked).on('end', function () {
          // zoom to fit when simulation is over
          self.parent.zoomToFit();
        });

        //force simulation restart
        simulation.alpha(0.5).restart();
      } else {
        // well, simulation is off, apply fixed positions and zoom to fit now
        ticked();
        self.parent.zoomToFit();
      }

      function ticked() {
        link.attr('x1', function (d) {
          return d.source.x;
        }).attr('y1', function (d) {
          return d.source.y;
        }).attr('x2', function (d) {
          return d.target.x;
        }).attr('y2', function (d) {
          return d.target.y;
        });

        node.attr('transform', function (d) {
          return 'translate(' + d.x + ',' + d.y + ')';
        });
      }

      // HIGHLIGHT
      //Toggle stores whether the highlighting is on
      var toggle = 0;
      //Create an array logging what is connected to what
      var linkedByIndex = {};

      for (var i = 0; i < canvasNodes.length; i++) {
        linkedByIndex[i + ',' + i] = 1;
      }

      canvasLinks.forEach(function (d) {
        linkedByIndex[d.source.index + ',' + d.target.index] = 1;
      });

      function connectedNodes() {
        //This function looks up whether a pair are neighbours
        function neighboring(a, b) {
          return linkedByIndex[a.index + ',' + b.index];
        }
        d3.event.preventDefault();
        if (toggle === 0) {
          //Reduce the opacity of all but the neighbouring nodes
          var d = d3.select(this).node().__data__;
          node.style('opacity', function (o) {
            return neighboring(d, o) || neighboring(o, d) ? 1 : 0.1;
          });
          link.style('opacity', function (o) {
            return d.index === o.source.index || d.index === o.target.index ? 1 : 0.1;
          });
          //Reduce the op
          toggle = 1;
        } else {
          //Put them back to opacity=1
          node.style('opacity', 1);
          link.style('opacity', 1);
          toggle = 0;
        }
      }

      function dragstarted(d) {
        if (!d3.event.active && simulationActive) {
          simulation.alphaTarget(0.01).restart();
        }
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      function dragended(d) {
        if (!d3.event.active && simulationActive) {
          simulation.alphaTarget(0);
        }
        d.fx = null;
        d.fy = null;
      }

      (0, _component.RegisterMathJax)(this.SVGParent);

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }, {
    key: '_filterNewElements',
    value: function _filterNewElements(canvasObjects, d3Element) {
      var newElements = [];
      canvasObjects.forEach(function (o) {
        var link = d3Element.find(function (d) {
          return d.id === o.id;
        });
        if (link) {
          newElements.push(link);
        } else {
          newElements.push(o);
        }
      });
      return newElements;
    }
  }]);

  return GenericGraph;
}(_graph2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = GenericGraph;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _chartBar = __webpack_require__(22);

var _chartBar2 = _interopRequireDefault(_chartBar);

var _chartLine = __webpack_require__(23);

var _chartLine2 = _interopRequireDefault(_chartLine);

var _chartScatter = __webpack_require__(24);

var _chartScatter2 = _interopRequireDefault(_chartScatter);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var ChartFactory = (_dec = (0, _dataDecorator.requires)('canvas.chart'), (_class = function (_Renderer) {
  _inherits(ChartFactory, _Renderer);

  function ChartFactory(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, ChartFactory);

    return _possibleConstructorReturn(this, (ChartFactory.__proto__ || Object.getPrototypeOf(ChartFactory)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(ChartFactory, [{
    key: 'render',
    value: function render() {

      var element = undefined;
      switch (this.data.canvas.chart.type) {
        case 'bar':
          element = new _chartBar2.default(this.options).load(this.data).render();
          break;
        case 'line':
          element = new _chartLine2.default(this.options).load(this.data).render();
          break;
        case 'scatter':
          element = new _chartScatter2.default(this.options).load(this.data).render();
          break;
      }

      return element;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return ChartFactory;
}(_renderer2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = ChartFactory;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _chart = __webpack_require__(4);

var _chart2 = _interopRequireDefault(_chart);

var _initializeDecorator = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var BarChart = (_dec = (0, _initializeDecorator.initialize)(), (_class = function (_Chart) {
  _inherits(BarChart, _Chart);

  function BarChart(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, BarChart);

    return _possibleConstructorReturn(this, (BarChart.__proto__ || Object.getPrototypeOf(BarChart)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(BarChart, [{
    key: 'render',
    value: function render() {

      this.xScale = d3.scaleBand().range([0, this.width]).padding(0.1).domain(this.axis.x.domain);

      if (!this.axis.x.domain.length) {
        this.axis.x.domain = _chart2.default.domainRange(this.allValues.length / this.datasetNames.length);
        this.xScale.domain(this.axis.x.domain);
      }

      var barsGroup = this.element.selectAll('g.francy-bars');

      if (!barsGroup.node()) {
        barsGroup = this.element.append('g').attr('class', 'francy-bars');
      }

      var self = this;

      this.datasetNames.forEach(function (key, index) {
        var bar = barsGroup.selectAll('.francy-bar-' + index).data(self.datasets[key]);

        bar.exit().transition().duration(750).style('fill-opacity', 1e-6).remove();

        // append the rectangles for the bar chart
        var barEnter = bar.enter().append('rect').style('fill', function () {
          return _chart2.default.colors(index * 5);
        }).attr('class', 'francy-bar-' + index).attr('x', function (d, i) {
          return self.xScale(self.axis.x.domain[i]) + index * (self.xScale.bandwidth() / self.datasetNames.length);
        }).attr('width', self.xScale.bandwidth() / self.datasetNames.length - 1).attr('y', function (d) {
          return self.yScale(d);
        }).attr('height', function (d) {
          return self.height - self.yScale(d);
        }).on('mouseenter', function (d) {
          d3.select(this).transition().duration(250).style('fill-opacity', 0.5);
          self.tooltip.load(_chart2.default.tooltip(key, d), true).render();
        }).on('mouseleave', function () {
          d3.select(this).transition().duration(250).style('fill-opacity', 1);
          self.tooltip.unrender();
        });

        barEnter.merge(bar).attr('x', function (d, i) {
          return self.xScale(self.axis.x.domain[i]) + index * (self.xScale.bandwidth() / self.datasetNames.length);
        }).attr('width', self.xScale.bandwidth() / self.datasetNames.length - 1).attr('y', function (d) {
          return self.yScale(d);
        }).attr('height', function (d) {
          return self.height - self.yScale(d);
        });
      });

      this._renderAxis();
      this._renderLegend();

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return BarChart;
}(_chart2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = BarChart;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _chart = __webpack_require__(4);

var _chart2 = _interopRequireDefault(_chart);

var _initializeDecorator = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var LineChart = (_dec = (0, _initializeDecorator.initialize)(), (_class = function (_Chart) {
  _inherits(LineChart, _Chart);

  function LineChart(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, LineChart);

    return _possibleConstructorReturn(this, (LineChart.__proto__ || Object.getPrototypeOf(LineChart)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(LineChart, [{
    key: 'render',
    value: function render() {

      var linesGroup = this.element.selectAll('g.francy-lines');

      if (!linesGroup.node()) {
        linesGroup = this.element.append('g').attr('class', 'francy-lines');
      }

      var self = this;

      this.datasetNames.forEach(function (key, index) {
        var valueLine = d3.line().x(function (d, i) {
          return self.xScale(i);
        }).y(function (d) {
          return self.yScale(d);
        });

        var line = linesGroup.selectAll('.francy-line-' + index).data([self.datasets[key]]);

        line.exit().transition().duration(750).style('fill-opacity', 1e-6).remove();

        // append the rectangles for the bar chart
        var lineEnter = line.enter().append('path').style('stroke', function () {
          return _chart2.default.colors(index * 5);
        }).style('stroke-width', '5px').attr('class', 'francy-line-' + index).attr('d', valueLine).on('mouseenter', function (d) {
          d3.select(this).transition().duration(250).style('stroke-opacity', 0.5).style('stroke-width', '10px');
          self.tooltip.load(_chart2.default.tooltip(key, d), true).render();
        }).on('mouseleave', function () {
          d3.select(this).transition().duration(250).style('stroke-opacity', 1).style('stroke-width', '5px');
          self.tooltip.unrender();
        });

        lineEnter.merge(line);
      });

      this._renderAxis();
      this._renderLegend();

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return LineChart;
}(_chart2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = LineChart;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _chart = __webpack_require__(4);

var _chart2 = _interopRequireDefault(_chart);

var _initializeDecorator = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var ScatterChart = (_dec = (0, _initializeDecorator.initialize)(), (_class = function (_Chart) {
  _inherits(ScatterChart, _Chart);

  function ScatterChart(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, ScatterChart);

    return _possibleConstructorReturn(this, (ScatterChart.__proto__ || Object.getPrototypeOf(ScatterChart)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(ScatterChart, [{
    key: 'render',
    value: function render() {

      var scatterGroup = this.element.selectAll('g.francy-scatters');

      if (!scatterGroup.node()) {
        scatterGroup = this.element.append('g').attr('class', 'francy-scatters');
      }

      var self = this;

      this.datasetNames.forEach(function (key, index) {
        var scatter = scatterGroup.selectAll('.francy-scatter-' + index).data(self.datasets[key]);

        scatter.exit().transition().duration(750).style('fill-opacity', 1e-6).remove();

        // append the rectangles for the bar chart
        var scatterEnter = scatter.enter().append('circle').style('fill', function () {
          return _chart2.default.colors(index * 5);
        }).attr('class', 'francy-scatter-' + index).attr('r', 5).attr('cx', function (d, i) {
          return self.xScale(i);
        }).attr('cy', function (d) {
          return self.yScale(d);
        }).on('mouseenter', function (d) {
          d3.select(this).transition().duration(250).style('fill-opacity', 0.5).attr('r', 10);
          self.tooltip.load(_chart2.default.tooltip(key, d), true).render();
        }).on('mouseleave', function () {
          d3.select(this).transition().duration(250).style('fill-opacity', 1).attr('r', 5);
          self.tooltip.unrender();
        });

        scatterEnter.merge(scatter);
      });

      this._renderAxis();

      this._renderLegend();

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return ScatterChart;
}(_chart2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = ScatterChart;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menu = __webpack_require__(9);

var _menu2 = _interopRequireDefault(_menu);

var _modalAbout = __webpack_require__(26);

var _modalAbout2 = _interopRequireDefault(_modalAbout);

var _saveSvgAsPng = __webpack_require__(28);

var SvgToPng = _interopRequireWildcard(_saveSvgAsPng);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 window */

var MainMenu = function (_Menu) {
  _inherits(MainMenu, _Menu);

  function MainMenu(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, MainMenu);

    return _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(MainMenu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var aboutModal = new _modalAbout2.default(this.options);

      // Otherwise clashes with the canvas itself!
      var menuId = 'MainMenu-' + this.data.canvas.id;
      this.element = d3.select('#' + menuId);

      // Check if the menu is already present
      if (!this.element.node()) {
        // create a div element detached from the DOM!
        this.logger.debug('Creating Main Menu [' + menuId + ']...');
        this.element = this.parent.append('div').attr('class', 'francy-main-menu-holder').attr('id', menuId);
      }

      // Force rebuild menu again
      this.element.selectAll('*').remove();

      this.element = this.element.append('ul').attr('class', 'francy-main-menu');

      if (this.data.canvas.title) {
        this.element.append('li').attr('class', 'francy-title').append('a').html(this.data.canvas.title);
      }

      var entry = this.element.append('li');
      entry.append('a').html('Francy');
      var content = entry.append('ul');
      content.append('li').append('a').on('click', function () {
        return _this2.options.appendTo.canvas.zoomToFit();
      }).attr('title', 'Zoom to Fit').html('Zoom to Fit');
      content.append('li').append('a').on('click', function () {
        return SvgToPng.saveSvgAsPng(_this2.SVGParent.node(), 'diagram.png');
      }).attr('title', 'Save to PNG').html('Save to PNG');
      content.append('li').append('a').on('click', function () {
        return aboutModal.load(_this2.data).render();
      }).attr('title', 'About').html('About');

      // Traverse all menus and flatten them!
      var menusIterator = this.iterator(Object.values(this.data.canvas.menus));
      this.traverse(this.element, menusIterator);

      this.logger.debug('Main Menu updated [' + menuId + ']...');

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return MainMenu;
}(_menu2.default);

exports.default = MainMenu;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _modal = __webpack_require__(27);

var _modal2 = _interopRequireDefault(_modal);

var _component = __webpack_require__(3);

var _initializeDecorator = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var AboutModal = (_dec = (0, _initializeDecorator.initialize)(), (_class = function (_Modal) {
  _inherits(AboutModal, _Modal);

  function AboutModal(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, AboutModal);

    return _possibleConstructorReturn(this, (AboutModal.__proto__ || Object.getPrototypeOf(AboutModal)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(AboutModal, [{
    key: 'render',
    value: function render() {

      var modalId = 'AboutModalWindow';

      this.logger.debug('Creating About Modal [' + modalId + ']...');

      this.element = this.holder.append('div').attr('id', modalId).attr('class', 'francy-modal');

      var form = this.element.append('form');

      var header = form.append('div').attr('class', 'francy-modal-header');

      header.append('span').html('About Francy v' + (this.data.version || 'N/A'));

      var content = form.append('div').attr('class', 'francy-modal-content').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');

      content.append('span').text('Loaded Object:');
      content.append('pre').attr('class', 'francy').html((0, _component.syntaxHighlight)(JSON.stringify(this.data.canvas, null, 2)));
      content.append('span').append('a').attr('href', 'https://github.com/mcmartins/francy').text('Francy on Github');

      var footer = form.append('div').attr('class', 'francy-modal-footer');

      footer.append('button').text('Ok').on('click', this.unrender);

      // disable keyboard shortcuts when using this modal in Jupyter
      (0, _component.RegisterJupyterKeyboardEvents)(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);

      this.logger.debug('Callback About updated [' + modalId + ']...');

      return this;
    }
  }]);

  return AboutModal;
}(_modal2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = AboutModal;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var Modal = function (_Renderer) {
  _inherits(Modal, _Renderer);

  function Modal(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    _this.overlay = undefined;
    _this.holder = undefined;
    return _this;
  }

  _createClass(Modal, [{
    key: '_initialize',
    value: function _initialize() {
      // we want to overlay everything, hence 'body' must be used
      this.overlay = d3.select('body').append('div').attr('class', 'francy-overlay');
      this.holder = d3.select('body').append('div').attr('class', 'francy');
    }
  }, {
    key: 'unrender',
    value: function unrender() {
      this.overlay.remove();
      this.element.remove();
      this.holder.remove();
      d3.event.preventDefault();
      return false;
    }
  }]);

  return Modal;
}(_renderer2.default);

exports.default = Modal;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

(function () {
  var out$ = typeof exports != 'undefined' && exports || "function" != 'undefined' && {} || this;

  var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>';

  function isElement(obj) {
    return obj instanceof HTMLElement || obj instanceof SVGElement;
  }

  function requireDomNode(el) {
    if (!isElement(el)) {
      throw new Error('an HTMLElement or SVGElement is required; got ' + el);
    }
  }

  function isExternal(url) {
    return url && url.lastIndexOf('http', 0) == 0 && url.lastIndexOf(window.location.host) == -1;
  }

  function inlineImages(el, callback) {
    requireDomNode(el);

    var images = el.querySelectorAll('image'),
        left = images.length,
        checkDone = function checkDone() {
      if (left === 0) {
        callback();
      }
    };

    checkDone();
    for (var i = 0; i < images.length; i++) {
      (function (image) {
        var href = image.getAttributeNS("http://www.w3.org/1999/xlink", "href");
        if (href) {
          if (isExternal(href.value)) {
            console.warn("Cannot render embedded images linking to external hosts: " + href.value);
            return;
          }
        }
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.crossOrigin = "anonymous";
        href = href || image.getAttribute('href');
        if (href) {
          img.src = href;
          img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            image.setAttributeNS("http://www.w3.org/1999/xlink", "href", canvas.toDataURL('image/png'));
            left--;
            checkDone();
          };
          img.onerror = function () {
            console.log("Could not load " + href);
            left--;
            checkDone();
          };
        } else {
          left--;
          checkDone();
        }
      })(images[i]);
    }
  }

  function styles(el, options, cssLoadedCallback) {
    var selectorRemap = options.selectorRemap;
    var modifyStyle = options.modifyStyle;
    var css = "";
    // each font that has extranl link is saved into queue, and processed
    // asynchronously
    var fontsQueue = [];
    var sheets = document.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
      try {
        var rules = sheets[i].cssRules;
      } catch (e) {
        console.warn("Stylesheet could not be loaded: " + sheets[i].href);
        continue;
      }

      if (rules != null) {
        for (var j = 0, match; j < rules.length; j++, match = null) {
          var rule = rules[j];
          if (typeof rule.style != "undefined") {
            var selectorText;

            try {
              selectorText = rule.selectorText;
            } catch (err) {
              console.warn('The following CSS rule has an invalid selector: "' + rule + '"', err);
            }

            try {
              if (selectorText) {
                match = el.querySelector(selectorText) || el.parentNode.querySelector(selectorText);
              }
            } catch (err) {
              console.warn('Invalid CSS selector "' + selectorText + '"', err);
            }

            if (match) {
              var selector = selectorRemap ? selectorRemap(rule.selectorText) : rule.selectorText;
              var cssText = modifyStyle ? modifyStyle(rule.style.cssText) : rule.style.cssText;
              css += selector + " { " + cssText + " }\n";
            } else if (rule.cssText.match(/^@font-face/)) {
              // below we are trying to find matches to external link. E.g.
              // @font-face {
              //   // ...
              //   src: local('Abel'), url(https://fonts.gstatic.com/s/abel/v6/UzN-iejR1VoXU2Oc-7LsbvesZW2xOQ-xsNqO47m55DA.woff2);
              // }
              //
              // This regex will save extrnal link into first capture group
              var fontUrlRegexp = /url\(["']?(.+?)["']?\)/;
              // TODO: This needs to be changed to support multiple url declarations per font.
              var fontUrlMatch = rule.cssText.match(fontUrlRegexp);

              var externalFontUrl = fontUrlMatch && fontUrlMatch[1] || '';
              var fontUrlIsDataURI = externalFontUrl.match(/^data:/);
              if (fontUrlIsDataURI) {
                // We should ignore data uri - they are already embedded
                externalFontUrl = '';
              }

              if (externalFontUrl) {
                // okay, we are lucky. We can fetch this font later

                //handle url if relative
                if (externalFontUrl.startsWith('../')) {
                  externalFontUrl = sheets[i].href + '/../' + externalFontUrl;
                } else if (externalFontUrl.startsWith('./')) {
                  externalFontUrl = sheets[i].href + '/.' + externalFontUrl;
                }

                fontsQueue.push({
                  text: rule.cssText,
                  // Pass url regex, so that once font is downladed, we can run `replace()` on it
                  fontUrlRegexp: fontUrlRegexp,
                  format: getFontMimeTypeFromUrl(externalFontUrl),
                  url: externalFontUrl
                });
              } else {
                // otherwise, use previous logic
                css += rule.cssText + '\n';
              }
            }
          }
        }
      }
    }

    // Now all css is processed, it's time to handle scheduled fonts
    processFontQueue(fontsQueue);

    function getFontMimeTypeFromUrl(fontUrl) {
      var supportedFormats = {
        'woff2': 'font/woff2',
        'woff': 'font/woff',
        'otf': 'application/x-font-opentype',
        'ttf': 'application/x-font-ttf',
        'eot': 'application/vnd.ms-fontobject',
        'sfnt': 'application/font-sfnt',
        'svg': 'image/svg+xml'
      };
      var extensions = Object.keys(supportedFormats);
      for (var i = 0; i < extensions.length; ++i) {
        var extension = extensions[i];
        // TODO: This is not bullet proof, it needs to handle edge cases...
        if (fontUrl.indexOf('.' + extension) > 0) {
          return supportedFormats[extension];
        }
      }

      // If you see this error message, you probably need to update code above.
      console.error('Unknown font format for ' + fontUrl + '; Fonts may not be working correctly');
      return 'application/octet-stream';
    }

    function processFontQueue(queue) {
      if (queue.length > 0) {
        // load fonts one by one until we have anything in the queue:
        var font = queue.pop();
        processNext(font);
      } else {
        // no more fonts to load.
        cssLoadedCallback(css);
      }

      function processNext(font) {
        // TODO: This could benefit from caching.
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', fontLoaded);
        oReq.addEventListener('error', transferFailed);
        oReq.addEventListener('abort', transferFailed);
        oReq.open('GET', font.url);
        oReq.responseType = 'arraybuffer';
        oReq.send();

        function fontLoaded() {
          // TODO: it may be also worth to wait until fonts are fully loaded before
          // attempting to rasterize them. (e.g. use https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet )
          var fontBits = oReq.response;
          var fontInBase64 = arrayBufferToBase64(fontBits);
          updateFontStyle(font, fontInBase64);
        }

        function transferFailed(e) {
          console.warn('Failed to load font from: ' + font.url);
          console.warn(e);
          css += font.text + '\n';
          processFontQueue();
        }

        function updateFontStyle(font, fontInBase64) {
          var dataUrl = 'url("data:' + font.format + ';base64,' + fontInBase64 + '")';
          css += font.text.replace(font.fontUrlRegexp, dataUrl) + '\n';

          // schedule next font download on next tick.
          setTimeout(function () {
            processFontQueue(queue);
          }, 0);
        }
      }
    }

    function arrayBufferToBase64(buffer) {
      var binary = '';
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;

      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }

      return window.btoa(binary);
    }
  }

  function getDimension(el, clone, dim) {
    var v = el.viewBox && el.viewBox.baseVal && el.viewBox.baseVal[dim] || clone.getAttribute(dim) !== null && !clone.getAttribute(dim).match(/%$/) && parseInt(clone.getAttribute(dim)) || el.getBoundingClientRect()[dim] || parseInt(clone.style[dim]) || parseInt(window.getComputedStyle(el).getPropertyValue(dim));
    return typeof v === 'undefined' || v === null || isNaN(parseFloat(v)) ? 0 : v;
  }

  function reEncode(data) {
    data = encodeURIComponent(data);
    data = data.replace(/%([0-9A-F]{2})/g, function (match, p1) {
      var c = String.fromCharCode('0x' + p1);
      return c === '%' ? '%25' : c;
    });
    return decodeURIComponent(data);
  }

  out$.prepareSvg = function (el, options, cb) {
    requireDomNode(el);

    options = options || {};
    options.scale = options.scale || 1;
    options.responsive = options.responsive || false;
    var xmlns = "http://www.w3.org/2000/xmlns/";

    inlineImages(el, function () {
      var outer = document.createElement("div");
      var clone = el.cloneNode(true);
      var width, height;
      if (el.tagName == 'svg') {
        width = options.width || getDimension(el, clone, 'width');
        height = options.height || getDimension(el, clone, 'height');
      } else if (el.getBBox) {
        var box = el.getBBox();
        width = box.x + box.width;
        height = box.y + box.height;
        clone.setAttribute('transform', clone.getAttribute('transform').replace(/translate\(.*?\)/, ''));

        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.appendChild(clone);
        clone = svg;
      } else {
        console.error('Attempted to render non-SVG element', el);
        return;
      }

      clone.setAttribute("version", "1.1");
      if (!clone.getAttribute('xmlns')) {
        clone.setAttributeNS(xmlns, "xmlns", "http://www.w3.org/2000/svg");
      }
      if (!clone.getAttribute('xmlns:xlink')) {
        clone.setAttributeNS(xmlns, "xmlns:xlink", "http://www.w3.org/1999/xlink");
      }

      if (options.responsive) {
        clone.removeAttribute('width');
        clone.removeAttribute('height');
        clone.setAttribute('preserveAspectRatio', 'xMinYMin meet');
      } else {
        clone.setAttribute("width", width * options.scale);
        clone.setAttribute("height", height * options.scale);
      }

      clone.setAttribute("viewBox", [options.left || 0, options.top || 0, width, height].join(" "));

      var fos = clone.querySelectorAll('foreignObject > *');
      for (var i = 0; i < fos.length; i++) {
        if (!fos[i].getAttribute('xmlns')) {
          fos[i].setAttributeNS(xmlns, "xmlns", "http://www.w3.org/1999/xhtml");
        }
      }

      outer.appendChild(clone);

      // In case of custom fonts we need to fetch font first, and then inline
      // its url into data-uri format (encode as base64). That's why style
      // processing is done asynchonously. Once all inlining is finshed
      // cssLoadedCallback() is called.
      styles(el, options, cssLoadedCallback);

      function cssLoadedCallback(css) {
        // here all fonts are inlined, so that we can render them properly.
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.innerHTML = "<![CDATA[\n" + css + "\n]]>";
        var defs = document.createElement('defs');
        defs.appendChild(s);
        clone.insertBefore(defs, clone.firstChild);

        if (cb) {
          var outHtml = outer.innerHTML;
          outHtml = outHtml.replace(/NS\d+:href/gi, 'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');
          cb(outHtml, width, height);
        }
      }
    });
  };

  out$.svgAsDataUri = function (el, options, cb) {
    out$.prepareSvg(el, options, function (svg) {
      var uri = 'data:image/svg+xml;base64,' + window.btoa(reEncode(doctype + svg));
      if (cb) {
        cb(uri);
      }
    });
  };

  out$.svgAsPngUri = function (el, options, cb) {
    requireDomNode(el);

    options = options || {};
    options.encoderType = options.encoderType || 'image/png';
    options.encoderOptions = options.encoderOptions || 0.8;

    var convertToPng = function convertToPng(src, w, h) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = w;
      canvas.height = h;

      if (options.canvg) {
        options.canvg(canvas, src);
      } else {
        context.drawImage(src, 0, 0);
      }

      if (options.backgroundColor) {
        context.globalCompositeOperation = 'destination-over';
        context.fillStyle = options.backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      var png;
      try {
        png = canvas.toDataURL(options.encoderType, options.encoderOptions);
      } catch (e) {
        if (typeof SecurityError !== 'undefined' && e instanceof SecurityError || e.name == "SecurityError") {
          console.error("Rendered SVG images cannot be downloaded in this browser.");
          return;
        } else {
          throw e;
        }
      }
      cb(png);
    };

    if (options.canvg) {
      out$.prepareSvg(el, options, convertToPng);
    } else {
      out$.svgAsDataUri(el, options, function (uri) {
        var image = new Image();

        image.onload = function () {
          convertToPng(image, image.width, image.height);
        };

        image.onerror = function () {
          console.error('There was an error loading the data URI as an image on the following SVG\n', window.atob(uri.slice(26)), '\n', "Open the following link to see browser's diagnosis\n", uri);
        };

        image.src = uri;
      });
    }
  };

  out$.download = function (name, uri) {
    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(uriToBlob(uri), name);
    } else {
      var saveLink = document.createElement('a');
      var downloadSupported = 'download' in saveLink;
      if (downloadSupported) {
        saveLink.download = name;
        saveLink.style.display = 'none';
        document.body.appendChild(saveLink);
        try {
          var blob = uriToBlob(uri);
          var url = URL.createObjectURL(blob);
          saveLink.href = url;
          saveLink.onclick = function () {
            requestAnimationFrame(function () {
              URL.revokeObjectURL(url);
            });
          };
        } catch (e) {
          console.warn('This browser does not support object URLs. Falling back to string URL.');
          saveLink.href = uri;
        }
        saveLink.click();
        document.body.removeChild(saveLink);
      } else {
        window.open(uri, '_temp', 'menubar=no,toolbar=no,status=no');
      }
    }
  };

  function uriToBlob(uri) {
    var byteString = window.atob(uri.split(',')[1]);
    var mimeString = uri.split(',')[0].split(':')[1].split(';')[0];
    var buffer = new ArrayBuffer(byteString.length);
    var intArray = new Uint8Array(buffer);
    for (var i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([buffer], { type: mimeString });
  }

  out$.saveSvg = function (el, name, options) {
    requireDomNode(el);

    options = options || {};
    out$.svgAsDataUri(el, options, function (uri) {
      out$.download(name, uri);
    });
  };

  out$.saveSvgAsPng = function (el, name, options) {
    requireDomNode(el);

    options = options || {};
    out$.svgAsPngUri(el, options, function (uri) {
      out$.download(name, uri);
    });
  };

  // if define is defined create as an AMD module
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return out$;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
})();

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var Message = (_dec = (0, _dataDecorator.requires)('canvas.messages'), (_class = function (_Renderer) {
  _inherits(Message, _Renderer);

  function Message(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Message, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var messages = Object.keys(this.data.canvas.messages).map(function (key) {
        return {
          id: key,
          type: _this2.data.canvas.messages[key].type,
          title: _this2.data.canvas.messages[key].title,
          text: _this2.data.canvas.messages[key].text
        };
      });

      var alertsId = 'Messages-' + this.data.canvas.id;
      this.element = d3.select('#' + alertsId);
      // check if the div is already present
      if (!this.element.node()) {
        this.element = this.parent.append('div').attr('class', 'francy-message-holder').attr('id', alertsId);
      }

      var message = this.element.selectAll('div.francy-alert').data(messages, function (d) {
        return d.id;
      });
      var messageEnter = message.enter().append('div').attr('id', function (d) {
        return d.id;
      }).attr('class', function (d) {
        return 'francy-alert alert-' + d.type;
      }).on('click', function () {
        d3.select(this).style('display', 'none');
      });
      messageEnter.append('span').attr('class', 'strong').text(function (d) {
        return d.title;
      });
      messageEnter.append('span').text(function (d) {
        return d.text;
      });
      messageEnter.append('span').attr('class', 'strong').style('display', 'none').text('x');

      messageEnter.merge(message);

      message.exit().remove();

      this.element.style('display', 'block');

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return Message;
}(_renderer2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = Message;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyZjgzYTY4MGQ3MzkwZmNhN2ZjMSIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2RhdGEtZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC1mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtdHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtZ2VuZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZXNzYWdlLmpzIl0sIm5hbWVzIjpbIlJlbmRlcmVyIiwidmVyYm9zZSIsImFwcGVuZFRvIiwiY2FsbGJhY2tIYW5kbGVyIiwibmV3IiwidGFyZ2V0IiwiVHlwZUVycm9yIiwicmVuZGVyIiwidW5kZWZpbmVkIiwidW5yZW5kZXIiLCJsb2dnZXIiLCJkZWJ1ZyIsImVsZW1lbnQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJvcHRpb25zIiwibm9kZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImQzIiwic2VsZWN0IiwicGFyZW50Tm9kZSIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwicGFyZW50IiwiYXR0ciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1hcmdpbiIsImhlaWdodCIsInJlcXVpcmVzIiwicHJvcHMiLCJkZWNvcmF0b3IiLCJuYW1lIiwiZGVzY3JpcHRvciIsIm9sZFZhbHVlIiwidmFsdWUiLCJoYXNEYXRhIiwiZ2V0UHJvcGVydHkiLCJkYXRhIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJvYmoiLCJwcm9wZXJ0eVBhdGgiLCJ0bXAiLCJwcm9wZXJ0aWVzIiwic3BsaXQiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiQXJyYXkiLCJsZW5ndGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJpbml0aWFsaXplIiwia2V5IiwiX2luaXRpYWxpemUiLCJSZWdpc3Rlck1hdGhKYXgiLCJSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyIsInN5bnRheEhpZ2hsaWdodCIsInNldFRpbWVvdXQiLCJNYXRoSmF4IiwiSHViIiwiQ29uZmlnIiwidGV4MmpheCIsImpheCIsImlubGluZU1hdGgiLCJkaXNwbGF5TWF0aCIsInByb2Nlc3NFc2NhcGVzIiwiUmVnaXN0ZXIiLCJTdGFydHVwSG9vayIsInNlbGVjdEFsbCIsImVhY2giLCJzZWxmIiwibWF0aEpheCIsImFwcGVuZCIsInJlbW92ZSIsIlF1ZXVlIiwiQ29uZmlndXJlZCIsImUiLCJpbmZvIiwiY2xhc3NlcyIsIm1hcCIsImNsIiwiSnVweXRlciIsImtleWJvYXJkX21hbmFnZXIiLCJyZWdpc3Rlcl9ldmVudHMiLCJqc29uIiwicmVwbGFjZSIsIm1hdGNoIiwiY2xzIiwidGVzdCIsIkNoYXJ0IiwiYXhpcyIsInlTY2FsZSIsInhTY2FsZSIsImRhdGFzZXRzIiwiZGF0YXNldE5hbWVzIiwidG9vbHRpcCIsImNhbnZhcyIsImNoYXJ0Iiwia2V5cyIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJkb21haW4iLCJ4IiwieSIsImFsbFZhbHVlcyIsImZvckVhY2giLCJjb25jYXQiLCJtYXgiLCJkIiwieEF4aXNHcm91cCIsImNhbGwiLCJheGlzQm90dG9tIiwic3R5bGUiLCJ0ZXh0IiwidGl0bGUiLCJ5QXhpc0dyb3VwIiwiYXhpc0xlZnQiLCJzaG93TGVnZW5kIiwibGVnZW5kR3JvdXAiLCJsZWdlbmQiLCJzbGljZSIsImV4aXQiLCJlbnRlciIsImkiLCJtZXJnZSIsImNvbG9ycyIsImRhdGFzZXQiLCJmcm9tIiwiXyIsInNjYWxlU2VxdWVudGlhbCIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsIkNvbXBvc2l0ZSIsInJlbmRlcmVycyIsInJlbmRlcmVyIiwicHVzaCIsInNldHRpbmdzIiwibG9hZCIsIkJhc2UiLCJsb2ciLCJFcnJvciIsInBhcnRpYWwiLCJwYXJzZSIsIkxvZ2dlciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiX2Zvcm1hdCIsImVycm9yIiwibGV2ZWwiLCJEYXRlIiwidG9JU09TdHJpbmciLCJHcmFwaCIsImNvbnRleHRNZW51IiwiY2FsbGJhY2siLCJvbiIsImV4ZWN1dGVDYWxsYmFjayIsIm1lc3NhZ2VzIiwiZXZlbnQiLCJjYWxsYmFja3MiLCJjYiIsInRyaWdnZXIiLCJleGVjdXRlIiwidHlwZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsInN5bWJvbENpcmNsZSIsIk1lbnUiLCJtZW51c0l0ZXJhdG9yIiwiaGFzTmV4dCIsIm1lbnVJdGVtIiwibmV4dCIsImVudHJ5IiwiYWN0aW9uIiwiaHRtbCIsIm1lbnVzIiwiY29udGVudCIsInN1Yk1lbnVzSXRlcmF0b3IiLCJpdGVyYXRvciIsInRyYXZlcnNlIiwiYXJyYXkiLCJuZXh0SW5kZXgiLCJDYWxsYmFja0hhbmRsZXIiLCJyZXF1aXJlZEFyZ3MiLCJjYWxsYmFja09iaiIsIl9leGVjdXRlIiwiY2FsYmFja09iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJUb29sdGlwIiwiSFRNTFBhcmVudCIsInBvcyIsIm1vdXNlIiwiU1ZHUGFyZW50IiwidGFibGUiLCJyb3ciLCJBTExfQ0FOVkFTIiwiRnJhbmN5IiwiZnJhbWUiLCJpZCIsImV4cG9ydHMiLCJ3aW5kb3ciLCJvbGRSZXNpemUiLCJvbnJlc2l6ZSIsInpvb21Ub0ZpdCIsIkZyYW1lIiwibWVudSIsImFkZCIsImZyYW1lSWQiLCJyZW5kZXJDaGlsZHJlbiIsIkpzb25VdGlscyIsImlucHV0IiwianNvblJlZ2V4IiwiZXhlYyIsIm1pbWUiLCJNSU1FIiwiQ2FudmFzIiwiZ3JhcGgiLCJjaGFydEZhY3RvcnkiLCJ6b29tIiwidXBkYXRlWm9vbSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwic2NhbGUiLCJ0cmFuc2Zvcm0iLCJ6b29tSWRlbnRpdHkiLCJ0cmFuc2xhdGUiLCJ6b29tZWQiLCJzdG9wcGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInN0b3BQcm9wYWdhdGlvbiIsImJvdW5kcyIsImdldEJCb3giLCJjbGllbnRCb3VuZHMiLCJmdWxsV2lkdGgiLCJmdWxsSGVpZ2h0IiwibWlkWCIsIm1pZFkiLCJNYXRoIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2FudmFzSWQiLCJUcmVlR3JhcGgiLCJyb290IiwiaGllcmFyY2h5IiwidHJlZURhdGEiLCJjaGlsZHJlbiIsIngwIiwieTAiLCJsZXZlbFdpZHRoIiwiY2hpbGRDb3VudCIsIm4iLCJuZXdIZWlnaHQiLCJ0cmVlbWFwIiwidHJlZSIsInNpemUiLCJjb2xsYXBzZWQiLCJjb2xsYXBzZSIsInVwZGF0ZSIsIl9jaGlsZHJlbiIsInNvdXJjZSIsIm5vZGVzIiwiZGVzY2VuZGFudHMiLCJsaW5rcyIsImRlcHRoIiwibGlua0dyb3VwIiwibGluayIsImxpbmtFbnRlciIsIm8iLCJkaWFnb25hbCIsInMiLCJub2RlR3JvdXAiLCJub2RlRW50ZXIiLCJzeW1ib2wiLCJnZXRTeW1ib2wiLCJub2RlVXBkYXRlIiwibGF5ZXIiLCJfYXBwbHlFdmVudHMiLCJub2RlT25DbGljayIsImNsaWNrIiwiY2FudmFzTm9kZXMiLCJkYXRhTWFwIiwicmVkdWNlIiwiQ29udGV4dE1lbnUiLCJwcmV2ZW50RGVmYXVsdCIsIlJlcXVpcmVkQXJnc01vZGFsIiwibW9kYWxJZCIsImhvbGRlciIsImZvcm0iLCJoZWFkZXIiLCJoZWFkZXJUaXRsZSIsImFyZyIsIm9uY2hhbmdlIiwiY2hlY2tlZCIsImZvb3RlciIsImNoZWNrVmFsaWRpdHkiLCJpbnB1dEVsZW1lbnQiLCJmb2N1cyIsIkdlbmVyaWNHcmFwaCIsInNpbXVsYXRpb25BY3RpdmUiLCJzaW11bGF0aW9uIiwiY2FudmFzTGlua3MiLCJsaW5rc1RvQWRkIiwiX2ZpbHRlck5ld0VsZW1lbnRzIiwibm9kZXNUb0FkZCIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJlbXB0eSIsInNob3dOZWlnaGJvdXJzIiwiY29ubmVjdGVkTm9kZXMiLCJib3VuZCIsImNlbnRlckZvcmNlIiwiZm9yY2VDZW50ZXIiLCJtYW55Rm9yY2UiLCJmb3JjZU1hbnlCb2R5Iiwic3RyZW5ndGgiLCJsaW5rRm9yY2UiLCJmb3JjZUxpbmsiLCJkaXN0YW5jZSIsImNvbGxpZGVGb3JjZSIsImZvcmNlQ29sbGlkZSIsImZvcmNlWCIsImZvcmNlWSIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwidGlja2VkIiwiYWxwaGEiLCJyZXN0YXJ0IiwidG9nZ2xlIiwibGlua2VkQnlJbmRleCIsImluZGV4IiwibmVpZ2hib3JpbmciLCJhIiwiYiIsIl9fZGF0YV9fIiwiYWN0aXZlIiwiYWxwaGFUYXJnZXQiLCJmeCIsImZ5IiwiY2FudmFzT2JqZWN0cyIsImQzRWxlbWVudCIsIm5ld0VsZW1lbnRzIiwiZmluZCIsIkNoYXJ0RmFjdG9yeSIsIkJhckNoYXJ0Iiwic2NhbGVCYW5kIiwicGFkZGluZyIsImRvbWFpblJhbmdlIiwiYmFyc0dyb3VwIiwiYmFyIiwiYmFyRW50ZXIiLCJiYW5kd2lkdGgiLCJfcmVuZGVyQXhpcyIsIl9yZW5kZXJMZWdlbmQiLCJMaW5lQ2hhcnQiLCJsaW5lc0dyb3VwIiwidmFsdWVMaW5lIiwibGluZSIsImxpbmVFbnRlciIsIlNjYXR0ZXJDaGFydCIsInNjYXR0ZXJHcm91cCIsInNjYXR0ZXIiLCJzY2F0dGVyRW50ZXIiLCJTdmdUb1BuZyIsIk1haW5NZW51IiwiYWJvdXRNb2RhbCIsIm1lbnVJZCIsInNhdmVTdmdBc1BuZyIsIkFib3V0TW9kYWwiLCJ2ZXJzaW9uIiwiTW9kYWwiLCJvdmVybGF5Iiwib3V0JCIsImRvY3R5cGUiLCJpc0VsZW1lbnQiLCJIVE1MRWxlbWVudCIsIlNWR0VsZW1lbnQiLCJyZXF1aXJlRG9tTm9kZSIsImVsIiwiaXNFeHRlcm5hbCIsInVybCIsImxhc3RJbmRleE9mIiwibG9jYXRpb24iLCJob3N0IiwiaW5saW5lSW1hZ2VzIiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImNoZWNrRG9uZSIsImltYWdlIiwiaHJlZiIsImdldEF0dHJpYnV0ZU5TIiwid2FybiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJpbWciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwiZ2V0QXR0cmlidXRlIiwic3JjIiwib25sb2FkIiwiZHJhd0ltYWdlIiwic2V0QXR0cmlidXRlTlMiLCJ0b0RhdGFVUkwiLCJvbmVycm9yIiwic3R5bGVzIiwiY3NzTG9hZGVkQ2FsbGJhY2siLCJzZWxlY3RvclJlbWFwIiwibW9kaWZ5U3R5bGUiLCJjc3MiLCJmb250c1F1ZXVlIiwic2hlZXRzIiwic3R5bGVTaGVldHMiLCJydWxlcyIsImNzc1J1bGVzIiwiaiIsInJ1bGUiLCJzZWxlY3RvclRleHQiLCJlcnIiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0b3IiLCJjc3NUZXh0IiwiZm9udFVybFJlZ2V4cCIsImZvbnRVcmxNYXRjaCIsImV4dGVybmFsRm9udFVybCIsImZvbnRVcmxJc0RhdGFVUkkiLCJzdGFydHNXaXRoIiwiZm9ybWF0IiwiZ2V0Rm9udE1pbWVUeXBlRnJvbVVybCIsInByb2Nlc3NGb250UXVldWUiLCJmb250VXJsIiwic3VwcG9ydGVkRm9ybWF0cyIsImV4dGVuc2lvbnMiLCJleHRlbnNpb24iLCJpbmRleE9mIiwicXVldWUiLCJmb250IiwicG9wIiwicHJvY2Vzc05leHQiLCJvUmVxIiwiWE1MSHR0cFJlcXVlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9udExvYWRlZCIsInRyYW5zZmVyRmFpbGVkIiwib3BlbiIsInJlc3BvbnNlVHlwZSIsInNlbmQiLCJmb250Qml0cyIsInJlc3BvbnNlIiwiZm9udEluQmFzZTY0IiwiYXJyYXlCdWZmZXJUb0Jhc2U2NCIsInVwZGF0ZUZvbnRTdHlsZSIsImRhdGFVcmwiLCJidWZmZXIiLCJiaW5hcnkiLCJieXRlcyIsIlVpbnQ4QXJyYXkiLCJsZW4iLCJieXRlTGVuZ3RoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYnRvYSIsImdldERpbWVuc2lvbiIsImNsb25lIiwiZGltIiwidiIsInZpZXdCb3giLCJiYXNlVmFsIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImlzTmFOIiwicGFyc2VGbG9hdCIsInJlRW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicDEiLCJjIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicHJlcGFyZVN2ZyIsInJlc3BvbnNpdmUiLCJ4bWxucyIsIm91dGVyIiwiY2xvbmVOb2RlIiwiYm94Iiwic2V0QXR0cmlidXRlIiwic3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJqb2luIiwiZm9zIiwiaW5uZXJIVE1MIiwiZGVmcyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJvdXRIdG1sIiwic3ZnQXNEYXRhVXJpIiwidXJpIiwic3ZnQXNQbmdVcmkiLCJlbmNvZGVyVHlwZSIsImVuY29kZXJPcHRpb25zIiwiY29udmVydFRvUG5nIiwidyIsImgiLCJjb250ZXh0IiwiY2FudmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInBuZyIsIlNlY3VyaXR5RXJyb3IiLCJhdG9iIiwiZG93bmxvYWQiLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwidXJpVG9CbG9iIiwic2F2ZUxpbmsiLCJkb3dubG9hZFN1cHBvcnRlZCIsImRpc3BsYXkiLCJib2R5IiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm9uY2xpY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXZva2VPYmplY3RVUkwiLCJyZW1vdmVDaGlsZCIsImJ5dGVTdHJpbmciLCJtaW1lU3RyaW5nIiwiQXJyYXlCdWZmZXIiLCJpbnRBcnJheSIsImNoYXJDb2RlQXQiLCJCbG9iIiwic2F2ZVN2ZyIsImRlZmluZSIsIk1lc3NhZ2UiLCJhbGVydHNJZCIsIm1lc3NhZ2VFbnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQkEsUTs7O0FBRW5CLDBCQUE0RDtBQUFBLDRCQUE5Q0MsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsb0hBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EOztBQUUxRCxRQUFJQyxJQUFJQyxNQUFKLEtBQWVMLFFBQW5CLEVBQTZCO0FBQzNCLFlBQU0sSUFBSU0sU0FBSixDQUFjLGlEQUFkLENBQU47QUFDRDtBQUNELFFBQUksTUFB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O0FBQ0FnYixtQkFBYXpkLE1BQWIsQ0FBb0IsTUFBcEIsRUFBNEJoRCxJQUE1QixDQUFpQyxPQUFqQyxFQUEwQyxRQUExQyxFQUFvRHdGLEtBQXBELENBQTBELFNBQTFELEVBQXFFLE1BQXJFLEVBQTZFQyxJQUE3RSxDQUFrRixHQUFsRjs7QUFFQWdiLG1CQUFhcmEsS0FBYixDQUFtQnFCLE9BQW5COztBQUVBQSxjQUFReEIsSUFBUixHQUFlaEQsTUFBZjs7QUFFQSxXQUFLaEUsT0FBTCxDQUFhdUcsS0FBYixDQUFtQixTQUFuQixFQUE4QixPQUE5Qjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQTNDTSthLE8iLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZjgzYTY4MGQ3MzkwZmNhN2ZjMSIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IFJlbmRlcmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtSZW5kZXJlcl0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdGhpcy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgb3ZlcnJpZGUgW3JlbmRlcigpXSBtZXRob2QhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVucmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBbdW5yZW5kZXIoKV0gbWV0aG9kIHNwZWNpZmllZC4uLicpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSA3NTA7IC8vbXNcbiAgfVxuICBcbiAgX2luaXRpYWxpemUoKSB7fVxuXG4gIGdldCBIVE1MUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJyA/IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkucGFyZW50Tm9kZSkgOiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuXG4gIGdldCBTVkdQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdkaXYnID8gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQuc2VsZWN0KCdzdmcnKSA6IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG4gIFxuICBnZXQgcGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuICBcbiAgZ2V0IG1hcmdpbigpIHtcbiAgICByZXR1cm4geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH07XG4gIH1cbiAgXG4gIGdldCB3aWR0aCgpIHtcbiAgICBsZXQgd2lkdGggPSArdGhpcy5wYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgcmV0dXJuIHdpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICB9XG4gIFxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGxldCBoZWlnaHQgPSArdGhpcy5wYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICByZXR1cm4gaGVpZ2h0IC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvcmVuZGVyZXIuanMiLCJleHBvcnQgZnVuY3Rpb24gcmVxdWlyZXMocHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFoYXNEYXRhKGdldFByb3BlcnR5KHRoaXMuZGF0YSwgcHJvcHMpKSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTm8gZGF0YSBoZXJlIFske3Byb3BzfV0sIG5vdGhpbmcgdG8gcmVuZGVyLi4uIGNvbnRpbnVpbmcuLi5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIHByb3BlcnR5UGF0aCkge1xuXG4gIHZhciB0bXAgPSBvYmo7XG5cbiAgaWYgKHRtcCAmJiBwcm9wZXJ0eVBhdGgpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpO1xuXG4gICAgZm9yICh2YXIgcHJvcGVydHkgb2YgcHJvcGVydGllcykge1xuICAgICAgaWYgKCF0bXAuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIHRtcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdG1wID0gdG1wW3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG1wO1xufVxuXG5mdW5jdGlvbiBoYXNEYXRhKG9iaikge1xuICByZXR1cm4gb2JqICYmICgob2JqIGluc3RhbmNlb2YgQXJyYXkgJiYgb2JqLmxlbmd0aCkgfHwgKG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiBPYmplY3QudmFsdWVzKG9iaikubGVuZ3RoKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9kYXRhLWRlY29yYXRvci5qcyIsImV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gIH07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3IuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuLyogZ2xvYmFsIEp1cHl0ZXIsIE1hdGhKYXgsIGQzICovXG5cbmV4cG9ydCBmdW5jdGlvbiBSZWdpc3Rlck1hdGhKYXgoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHJldHVybjtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIE1hdGhKYXguSHViLkNvbmZpZyh7XG4gICAgICAgIHRleDJqYXg6IHtcbiAgICAgICAgICBqYXg6IFsnaW5wdXQvVGVYJywgJ291dHB1dC9TVkcnXSxcbiAgICAgICAgICBpbmxpbmVNYXRoOiBbXG4gICAgICAgICAgICBbJyQnLCAnJCddLFxuICAgICAgICAgICAgWydcXFxcKCcsICdcXFxcKSddXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkaXNwbGF5TWF0aDogW1xuICAgICAgICAgICAgWyckJCcsICckJCddLFxuICAgICAgICAgICAgWydcXFxcWycsICdcXFxcXSddXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcm9jZXNzRXNjYXBlczogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgTWF0aEpheC5IdWIuUmVnaXN0ZXIuU3RhcnR1cEhvb2soJ0VuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1sYWJlbCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IGQzLnNlbGVjdCh0aGlzKSxcbiAgICAgICAgICAgICAgbWF0aEpheCA9IHNlbGYuc2VsZWN0KCd0ZXh0PnNwYW4+c3ZnJyk7XG4gICAgICAgICAgICBpZiAobWF0aEpheC5ub2RlKCkpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWF0aEpheC5hdHRyKCd4Jywgc2VsZi5hdHRyKCd4JykpO1xuICAgICAgICAgICAgICAgIG1hdGhKYXguYXR0cigneScsIC0xNSk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KHNlbGYubm9kZSgpLnBhcmVudE5vZGUpLmFwcGVuZChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRoSmF4Lm5vZGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDI1MCk7XG4gICAgICB9KTtcblxuICAgICAgTWF0aEpheC5IdWIuUXVldWUoWydUeXBlc2V0JywgTWF0aEpheC5IdWIsIGVsZW1lbnQubm9kZSgpXSk7XG5cbiAgICAgIE1hdGhKYXguSHViLkNvbmZpZ3VyZWQoKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT09ICdSZWZlcmVuY2VFcnJvcicpIHtcbiAgICAgICAgbmV3IExvZ2dlcigpLmluZm8oJ0l0IHNlZW1zIE1hdGhKYXggaXMgbm90IGxvYWRlZC4uLicsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICB9LCAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhjbGFzc2VzKSB7XG4gIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIGluIEp1cHl0ZXIgZm9yIGNsYXNzZXNcbiAgaWYgKCFjbGFzc2VzKSByZXR1cm47XG4gIHRyeSB7XG4gICAgY2xhc3Nlcy5tYXAoKGNsKSA9PiB7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKGNsKTtcbiAgICB9KTtcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGlmIChlLm5hbWUgPT09ICdSZWZlcmVuY2VFcnJvcicpIHtcbiAgICAgIG5ldyBMb2dnZXIoKS5pbmZvKCdJdCBzZWVtcyB3ZVxcJ3JlIG5vdCBydW5uaW5nIG9uIEp1cHl0ZXIuLi4nLCBlKTtcbiAgICB9XG4gIH1cbn1cblxuICAvLyBjcmVkaXRzIGhlcmU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ4MTA4NDEvaG93LWNhbi1pLXByZXR0eS1wcmludC1qc29uLXVzaW5nLWphdmFzY3JpcHQjYW5zd2VyLTcyMjA1MTBcbmV4cG9ydCBmdW5jdGlvbiBzeW50YXhIaWdobGlnaHQoanNvbikge1xuICBqc29uID0ganNvbi5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gIHJldHVybiBqc29uLnJlcGxhY2UoLyhcIihcXFxcdVthLXpBLVowLTldezR9fFxcXFxbXnVdfFteXCJdKSpcIihcXHMqOik/fFxcYih0cnVlfGZhbHNlfG51bGwpXFxifC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bKy1dP1xcZCspPykvZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICBsZXQgY2xzID0gJ251bWJlcic7XG4gICAgaWYgKC9eXCIvLnRlc3QobWF0Y2gpKSB7XG4gICAgICBpZiAoLzokLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBjbHMgPSAna2V5JztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjbHMgPSAnc3RyaW5nJztcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3RydWV8ZmFsc2UvLnRlc3QobWF0Y2gpKSB7XG4gICAgICBjbHMgPSAnYm9vbGVhbic7XG4gICAgfVxuICAgIGVsc2UgaWYgKC9udWxsLy50ZXN0KG1hdGNoKSkge1xuICAgICAgY2xzID0gJ251bGwnO1xuICAgIH1cbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNscyArICdcIj4nICsgbWF0Y2ggKyAnPC9zcGFuPic7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2NvbXBvbmVudC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuYXhpcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnlTY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnhTY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGFzZXRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGF0YXNldE5hbWVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudG9vbHRpcCA9IHVuZGVmaW5lZDtcbiAgfVxuICBcbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy50b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcbiAgICBcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcbiAgICBcbiAgICB0aGlzLmF4aXMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmF4aXM7XG4gICAgdGhpcy5kYXRhc2V0cyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuZGF0YTtcbiAgICB0aGlzLmRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YXNldHMpO1xuXG4gICAgdGhpcy54U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB0aGlzLndpZHRoXSkuZG9tYWluKHRoaXMuYXhpcy54LmRvbWFpbik7XG4gICAgdGhpcy55U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pLmRvbWFpbih0aGlzLmF4aXMueS5kb21haW4pO1xuICAgIFxuICAgIHRoaXMuYWxsVmFsdWVzID0gW107XG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChrZXkgPT4gdGhpcy5hbGxWYWx1ZXMgPSB0aGlzLmFsbFZhbHVlcy5jb25jYXQodGhpcy5kYXRhc2V0c1trZXldKSk7XG5cbiAgICBpZiAoIXRoaXMuYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHRoaXMueVNjYWxlLmRvbWFpbihbMCwgZDMubWF4KHRoaXMuYWxsVmFsdWVzLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnhTY2FsZS5kb21haW4oWzAsIHRoaXMuYWxsVmFsdWVzLmxlbmd0aCAvIHRoaXMuZGF0YXNldE5hbWVzLmxlbmd0aF0pO1xuICAgIH1cbiAgfVxuICBcbiAgX3JlbmRlckF4aXMoKSB7XG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgbGV0IHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHt0aGlzLmhlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54U2NhbGUpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHRoaXMud2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KHRoaXMuYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIGxldCB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnlTY2FsZSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIHRoaXMuaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dCh0aGlzLmF4aXMueS50aXRsZSk7XG4gIH1cbiAgXG4gIF9yZW5kZXJMZWdlbmQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuc2hvd0xlZ2VuZCkge1xuXG4gICAgICBsZXQgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgICBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgICAgbGV0IGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEodGhpcy5kYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cigneCcsIHRoaXMud2lkdGggKyAyMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMTkpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB0aGlzLndpZHRoICsgODApXG4gICAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAudGV4dChkID0+IGQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0b29sdGlwKGRhdGFzZXQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHsgJ0EnOiB7ICd0aXRsZSc6ICdEYXRhc2V0JywgJ3RleHQnOiBkYXRhc2V0IH0sICdCJzogeyAndGl0bGUnOiAnVmFsdWUnLCAndGV4dCc6IHZhbHVlIH0gfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGRvbWFpblJhbmdlKG1heCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBBcnJheShtYXgpLCAoXywgaSkgPT4gaSkubWFwKHggPT4geCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IENvbXBvc2l0ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbQ29tcG9zaXRlXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXJzID0gW107XG4gIH1cblxuICBhZGQocmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIC8vIHVwZGF0ZSBjaGlsZHJlbiByZW5kZXJpbmcgd2l0aCBhIG5ldyBwYXJlbnQhXG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgb3B0aW9ucy5hcHBlbmRUbyA9IHRoaXM7XG4gICAgLy8gcmVuZGVyIG90aGVyIGNvbXBvbmVudHNcbiAgICBmb3IgKGxldCByZW5kZXJlciBvZiB0aGlzLnJlbmRlcmVycykge1xuICAgICAgcmVuZGVyZXIuc2V0dGluZ3Mob3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBKc29uVXRpbHMgZnJvbSAnLi4vdXRpbC9qc29uLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvID0gJ2JvZHknLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMuc2V0dGluZ3MoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtMb2dnZXJ9IHRoZSBsb2dnZXIgZm9yIHRoaXMgY2xhc3NcbiAgICAgKi9cbiAgICB0aGlzLmxvZyA9IG5ldyBMb2dnZXIodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHNldHRpbmdzKHsgdmVyYm9zZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuICAgIGlmICghdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciAmJiAhY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgQ2FsbGJhY2sgSGFuZGxlciBtdXN0IGJlIHByb3ZpZGVkISBUaGlzIHdpbGwgYmUgdXNlZCB0byB0cmlnZ2VyIGV2ZW50cyBmcm9tIHRoZSBncmFwaGljcyBwcm9kdWNlZC4uLicpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5hcHBlbmRUbyAmJiAhYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhbiBlbGVtZW50IG9yIGlkIHRvIGFwcGVuZCB0aGUgZ3JhcGhpY3MgdG8uLi4hJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMudmVyYm9zZSA9IHZlcmJvc2UgfHwgdGhpcy5vcHRpb25zLnZlcmJvc2U7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZFRvID0gYXBwZW5kVG8gfHwgdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuICAgIHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIgPSBjYWxsYmFja0hhbmRsZXIgfHwgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxvYWQoanNvbiwgcGFydGlhbCkge1xuICAgIGxldCBkYXRhID0gSnNvblV0aWxzLnBhcnNlKGpzb24sIHBhcnRpYWwpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBsb2dnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvYmFzZS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBhIGxvZ2dlciBmb3IgdGhlIEZyYW5jeSBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICAvKipcbiAgICogTG9nZ2VyIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgIHRoaXMuY29uc29sZSA9IGNvbnNvbGU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtERUJVR10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKExvZ2dlci5fZm9ybWF0KCdERUJVRycsIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtJTkZPXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGluZm8obWVzc2FnZSkge1xuICAgIHRoaXMuY29uc29sZS5pbmZvKExvZ2dlci5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbRVJST1JdIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKExvZ2dlci5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtXQVJOXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICB3YXJuKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCB7fTtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IoTG9nZ2VyLl9mb3JtYXQoJ1dBUk4nLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwcml2YXRlIG1ldGhvZCB0aGF0IGZvcm1hdHMgYWxsIGxvZyBtZXNzYWdlc1xuICAgKiBAcGFyYW0gbGV2ZWwgdGhlIGxvZyBsZXZlbFxuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgc3RhdGljIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gJy4vbWVudS1jb250ZXh0JztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG4gIFxuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcbiAgfVxuXG4gIF9hcHBseUV2ZW50cyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG5cbiAgICBsZXQgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG4gICAgbGV0IGNvbnRleHRNZW51ID0gbmV3IENvbnRleHRNZW51KHRoaXMub3B0aW9ucyk7XG4gICAgbGV0IGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucyk7XG5cbiAgICBlbGVtZW50XG4gICAgICAub24oJ2NvbnRleHRtZW51JywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGRlZmF1bHQsIGJ1aWxkIGNvbnRleHQgbWVudVxuICAgICAgICBjb250ZXh0TWVudS5sb2FkKGQsIHRydWUpLnJlbmRlcigpO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdjb250ZXh0bWVudScpO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2RibGNsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2RibGNsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWVudGVyJywgZCA9PiB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gZGVmYXVsdCwgc2hvdyB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAubG9hZChkLm1lc3NhZ2VzLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZGUgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFjayhkYXRhLCBldmVudCkge1xuICAgICAgaWYgKGRhdGEuY2FsbGJhY2tzKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YS5jYWxsYmFja3MpLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgb25lcyB0aGF0IG1hdGNoIHRoZSBldmVudCFcbiAgICAgICAgICBjYi50cmlnZ2VyID09PSBldmVudCAmJiBjYWxsYmFjay5sb2FkKHsgY2FsbGJhY2s6IGNiIH0sIHRydWUpLmV4ZWN1dGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBcbiAgICBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdjcm9zcyc6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sQ3Jvc3M7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkaWFtb25kJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xEaWFtb25kO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3F1YXJlJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xTcXVhcmU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0cmlhbmdsZSc6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sVHJpYW5nbGU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzdGFyJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xTdGFyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnd3llJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xXeWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjaXJjbGUnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHRyYXZlcnNlKGFwcGVuZFRvLCBtZW51c0l0ZXJhdG9yKSB7XG4gICAgd2hpbGUgKG1lbnVzSXRlcmF0b3IuaGFzTmV4dCgpKSB7XG4gICAgICBsZXQgbWVudUl0ZW0gPSBtZW51c0l0ZXJhdG9yLm5leHQoKTtcbiAgICAgIGxldCBlbnRyeSA9IGFwcGVuZFRvLmFwcGVuZCgnbGknKTtcbiAgICAgIGxldCBhY3Rpb24gPSBlbnRyeS5zZWxlY3RBbGwoJ2EnKS5kYXRhKFttZW51SXRlbV0pLmVudGVyKCkuYXBwZW5kKCdhJykuYXR0cigndGl0bGUnLCBtZW51SXRlbS50aXRsZSkuaHRtbChtZW51SXRlbS50aXRsZSk7XG4gICAgICBpZiAobWVudUl0ZW0uY2FsbGJhY2sgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5jYWxsYmFjaykubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbi5vbignY2xpY2snLCAoZCkgPT4gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucykubG9hZChkLCB0cnVlKS5leGVjdXRlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKG1lbnVJdGVtLm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgICAgIGxldCBzdWJNZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSk7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoY29udGVudCwgc3ViTWVudXNJdGVyYXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXRlcmF0b3IoYXJyYXkpIHtcbiAgICBsZXQgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc05leHQoKSA/IGFycmF5W25leHRJbmRleCsrXSA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBoYXNOZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IGFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LmpzIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcbmltcG9ydCBSZXF1aXJlZEFyZ3NNb2RhbCBmcm9tICcuL21vZGFsLXJlcXVpcmVkJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxiYWNrSGFuZGxlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrSGFuZGxlcjtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FsbGJhY2snKVxuICBleGVjdXRlKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzKS5sZW5ndGgpIHtcbiAgICAgIGxldCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgb3B0aW9ucy5jYWxsYmFja0hhbmRsZXIgPSAoY2FsbGJhY2tPYmopID0+IHRoaXMuX2V4ZWN1dGUuY2FsbCh0aGlzLCBjYWxsYmFja09iaik7XG4gICAgICByZXR1cm4gbmV3IFJlcXVpcmVkQXJnc01vZGFsKG9wdGlvbnMpLmxvYWQodGhpcy5kYXRhLCB0cnVlKS5yZW5kZXIoKTtcbiAgICB9XG4gICAgXG4gICAgLy8gVHJpZ2dlciBpcyB0aGUgZXhwZWN0ZWQgY29tbWFuZCBvbiBHQVAgZm9yIHRoaXMgZXZlbnRzIVxuICAgIHRoaXMuX2V4ZWN1dGUodGhpcy5kYXRhLmNhbGxiYWNrKTtcbiAgICBcbiAgfVxuXG4gIF9leGVjdXRlKGNhbGJhY2tPYmopIHtcbiAgICB0aGlzLmNhbGxiYWNrKGBUcmlnZ2VyKCR7SlNPTi5zdHJpbmdpZnkoSlNPTi5zdHJpbmdpZnkoY2FsYmFja09iaikpfSk7YCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKClcbiAgcmVuZGVyKCkge1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LnNlbGVjdCgnZGl2LmZyYW5jeS10b29sdGlwLWhvbGRlcicpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRvb2x0aXAtaG9sZGVyJyk7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzIGFscmVhZHlcbiAgICBpZiAodGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwb3MgPSBkMy5tb3VzZSh0aGlzLlNWR1BhcmVudC5ub2RlKCkpO1xuXG4gICAgLy8gVE9ETyBmaXggYWx3YXlzIHZpc2libGUgdG9vbHRpcCwgZmluZSB1bnRpbCBzb21lb25lIGNvbXBsYWlucyBhYm91dCA6UFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnbGVmdCcsIChwb3NbMF0gKyA1KSArICdweCcpLnN0eWxlKCd0b3AnLCAocG9zWzFdIC0gNSkgKyAncHgnKTtcblxuICAgIGxldCB0YWJsZSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10b29sdGlwJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtYm9keScpO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIGxldCByb3cgPSB0YWJsZS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChzZWxmLmRhdGFba2V5XS50aXRsZSk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLnRleHQoc2VsZi5kYXRhW2tleV0udGV4dCk7XG4gICAgfSk7XG5cbiAgICAvLyBzaG93IHRvb2x0aXBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgbnVsbCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJpbXBvcnQgRnJhbWUgZnJvbSAnLi9yZW5kZXIvZnJhbWUnO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyL3JlbmRlcmVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmxldCBBTExfQ0FOVkFTID0ge307XG5cbi8qKlxuICogRnJhbmN5IGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgd2hvbGUgZnJhbWV3b3JrLiBCeSBwYXNzaW5nIGFuIGlucHV0IHN0cmluZy9vYmplY3QgdG8gdGhlIHtGcmFuY3kubG9hZH0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqICBcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBcbiAqIEB2ZXJzaW9uIDAuNS4wXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBsZXQgZnJhbmN5ID0gbmV3IEZyYW5jeSh7dmVyYm9zZTogdHJ1ZSwgYXBwZW5kVG86ICcjZGl2LWlkJywgY2FsbGJhY2tIYW5kbGVyOiBjb25zb2xlLmxvZ30pO1xuICogZnJhbmN5LmxvYWQoanNvbikucmVuZGVyKCk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW5jeSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyByZW5kZXIgcGFzc2luZyBhIGpzb24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpbGwgXG4gICAqIHRyaWdnZXIgdGhlIGRyYXdpbmcgb2YgYSBqc29uIG9iamVjdC5cbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGh0bWwgZWxlbWVudCBjcmVhdGVkXG4gICAqL1xuICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZnJhbWUgPSBuZXcgRnJhbWUodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgQUxMX0NBTlZBU1t0aGlzLmRhdGEuY2FudmFzLmlkXSA9IGZyYW1lO1xuICAgIHJldHVybiBmcmFtZS5lbGVtZW50Lm5vZGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB1bnJlbmRlcihpZCkge1xuICAgIGRlbGV0ZSBBTExfQ0FOVkFTW2lkXTtcbiAgfVxufVxuXG50cnkge1xuICBleHBvcnRzLkZyYW5jeSA9IHdpbmRvdy5GcmFuY3kgPSBGcmFuY3k7XG4gIC8vIGhhbmRsZSBldmVudHMgb24gcmVzaXplXG4gIGxldCBvbGRSZXNpemUgPSB3aW5kb3cub25yZXNpemU7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHpvb20gdG8gZml0IGFsbCBjYW52YXMgb24gcmVzaXplXG4gICAgT2JqZWN0LnZhbHVlcyhBTExfQ0FOVkFTKS5mb3JFYWNoKGZ1bmN0aW9uKGZyYW1lKSB7XG4gICAgICBmcmFtZS5jYW52YXMuem9vbVRvRml0KCk7XG4gICAgfSk7XG4gICAgLy8gY2FsbCBvbGQgcmVzaXplIGZ1bmN0aW9uIGlmIGFueSFcbiAgICBpZiAodHlwZW9mIG9sZFJlc2l6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2xkUmVzaXplKCk7XG4gICAgfVxuICB9O1xufVxuY2F0Y2ggKGUpIHtcbiAgZXhwb3J0cy5GcmFuY3kgPSBGcmFuY3k7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJhbmN5LmpzIiwiaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vY2FudmFzJztcbmltcG9ydCBNYWluTWVudSBmcm9tICcuL21lbnUtbWFpbic7XG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lIGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMubWVudSA9IG5ldyBNYWluTWVudSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgTWVzc2FnZSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMubWVzc2FnZXMpLmFkZCh0aGlzLm1lbnUpLmFkZCh0aGlzLmNhbnZhcyk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcGFyZW50ID0gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUbyk7XG5cbiAgICBjb25zdCBmcmFtZUlkID0gYEZyYW1lLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgZGl2IyR7ZnJhbWVJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEZyYW1lIFske2ZyYW1lSWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5JykuYXR0cignaWQnLCBmcmFtZUlkKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgZnJhbWUgd2l0aCBpZCBbJHtmcmFtZUlkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYEZyYW1lIHVwZGF0ZWQgWyR7ZnJhbWVJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9mcmFtZS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHBhcmFtIHBhcnRpYWwgLSBpZiB0aGUgaW5wdXQgaXMgbm90IGEgY29tcGxldGUgRnJhbmN5IEpTT04gT2JqZWN0LCBkZWZhdWx0cyB0byBmYWxzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCwgcGFydGlhbCA9IGZhbHNlKSB7XG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJyA/IEpTT04uc3RyaW5naWZ5KGlucHV0KSA6IGlucHV0O1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW1xcblxcclxcYlxcXFxdK3woZ2FwPikvZywgJycpO1xuICAgIGxldCBqc29uUmVnZXggPSAveyg/OlteXSkqfS9nO1xuICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlucHV0ID0gbWF0Y2hbMF07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4ganNvbi5taW1lID09PSBKc29uVXRpbHMuTUlNRSB8fCBwYXJ0aWFsID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdGF0aWMgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWltZSB0eXBlIHN1cHBvcnRlZCBieSB0aGlzIHBhY2thZ2VcbiAgICovXG4gIHN0YXRpYyBnZXQgTUlNRSgpIHtcbiAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL3ZuZC5mcmFuY3kranNvbic7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJpbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcbmltcG9ydCBHcmFwaEZhY3RvcnkgZnJvbSAnLi9ncmFwaC1mYWN0b3J5JztcbmltcG9ydCBDaGFydEZhY3RvcnkgZnJvbSAnLi9jaGFydC1mYWN0b3J5JztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5ncmFwaCA9IG5ldyBHcmFwaEZhY3RvcnkodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmNoYXJ0RmFjdG9yeSA9IG5ldyBDaGFydEZhY3RvcnkodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmFkZCh0aGlzLmdyYXBoKS5hZGQodGhpcy5jaGFydEZhY3RvcnkpO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMnKVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgbGV0IHpvb20gPSBkMy56b29tKCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlWm9vbSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZSkge1xuICAgICAgc2VsZi5lbGVtZW50LmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eS50cmFuc2xhdGUodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkuc2NhbGUoc2NhbGUsIHNjYWxlKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgICAgY29udGVudC5hdHRyKCd0cmFuc2Zvcm0nLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BwZWQoKSB7XG4gICAgICBpZiAoZDMuZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgeyBkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHpvb21Ub0ZpdCgpIHtcbiAgICAgIC8vIG9ubHkgZXhlY3V0ZSBpZiBlbmFibGUsIG9mIGNvdXJzZVxuICAgICAgaWYgKHNlbGYuZGF0YS5jYW52YXMuem9vbVRvRml0KSB7XG4gICAgICAgIGxldCBib3VuZHMgPSBjb250ZW50Lm5vZGUoKS5nZXRCQm94KCk7XG5cbiAgICAgICAgbGV0IGNsaWVudEJvdW5kcyA9IHNlbGYuZWxlbWVudC5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgZnVsbFdpZHRoID0gY2xpZW50Qm91bmRzLnJpZ2h0IC0gY2xpZW50Qm91bmRzLmxlZnQsXG4gICAgICAgICAgZnVsbEhlaWdodCA9IGNsaWVudEJvdW5kcy5ib3R0b20gLSBjbGllbnRCb3VuZHMudG9wO1xuXG4gICAgICAgIGxldCB3aWR0aCA9ICtib3VuZHMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gK2JvdW5kcy5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHdpZHRoID09PSAwIHx8IGhlaWdodCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtaWRYID0gYm91bmRzLnggKyB3aWR0aCAvIDIsXG4gICAgICAgICAgbWlkWSA9IGJvdW5kcy55ICsgaGVpZ2h0IC8gMjtcblxuICAgICAgICBsZXQgc2NhbGUgPSAwLjkgLyBNYXRoLm1heCh3aWR0aCAvIGZ1bGxXaWR0aCwgaGVpZ2h0IC8gZnVsbEhlaWdodCk7XG4gICAgICAgIGxldCB0cmFuc2xhdGVYID0gZnVsbFdpZHRoIC8gMiAtIHNjYWxlICogbWlkWCxcbiAgICAgICAgICB0cmFuc2xhdGVZID0gZnVsbEhlaWdodCAvIDIgLSBzY2FsZSAqIG1pZFk7XG5cbiAgICAgICAgY29udGVudC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oc2VsZi50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfSwke3RyYW5zbGF0ZVl9KXNjYWxlKCR7c2NhbGV9LCR7c2NhbGV9KWApXG4gICAgICAgICAgLm9uKCdlbmQnLCAoKSA9PiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FudmFzSWQgPSBgQ2FudmFzLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgc3ZnIyR7Y2FudmFzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYW52YXMgWyR7Y2FudmFzSWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wYXJlbnQuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNhbnZhcycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGNhbnZhc0lkKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgWyR7Y2FudmFzSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuYXR0cignd2lkdGgnLCB0aGlzLmRhdGEuY2FudmFzLndpZHRoKS5hdHRyKCdoZWlnaHQnLCB0aGlzLmRhdGEuY2FudmFzLmhlaWdodCk7XG5cbiAgICBjb250ZW50ID0gdGhpcy5lbGVtZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgaWYgKCFjb250ZW50Lm5vZGUoKSkge1xuICAgICAgY29udGVudCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGVudCcpO1xuICAgICAgem9vbS5vbignem9vbScsIHpvb21lZCk7XG4gICAgICAvLyByZW1vdmUgem9vbSBvbiBkb3VibGUgY2xpY2shXG4gICAgICB0aGlzLmVsZW1lbnQuY2FsbCh6b29tKS5vbignZGJsY2xpY2suem9vbScsIG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5vbignY2xpY2snLCBzdG9wcGVkLCB0cnVlKTtcblxuICAgIHRoaXMuZWxlbWVudC56b29tVG9GaXQgPSB0aGlzLnpvb21Ub0ZpdCA9IHpvb21Ub0ZpdDtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYW52YXMgdXBkYXRlZCBbJHtjYW52YXNJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHpvb21Ub0ZpdCgpO1xuICAgIH0sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUcmVlR3JhcGggZnJvbSAnLi9ncmFwaC10cmVlJztcbmltcG9ydCBHZW5lcmljR3JhcGggZnJvbSAnLi9ncmFwaC1nZW5lcmljJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5ncmFwaCcpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBlbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC50eXBlKSB7XG4gICAgY2FzZSAndHJlZSc6XG4gICAgICBlbGVtZW50ID0gbmV3IFRyZWVHcmFwaCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBlbGVtZW50ID0gbmV3IEdlbmVyaWNHcmFwaCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC1mYWN0b3J5LmpzIiwiaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IHsgUmVnaXN0ZXJNYXRoSmF4IH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZUdyYXBoIGV4dGVuZHMgR3JhcGgge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBpID0gMCxcbiAgICAgIHJvb3Q7XG5cbiAgICByb290ID0gZDMuaGllcmFyY2h5KHRoaXMudHJlZURhdGEsIGQgPT4gZC5jaGlsZHJlbik7XG4gICAgcm9vdC54MCA9IHRoaXMuaGVpZ2h0IC8gMjtcbiAgICByb290LnkwID0gMDtcblxuICAgIC8vIGNvbXB1dGUgaGVpZ2h0IGJhc2VkIG9uIHRoZSBkZXB0aCBvZiB0aGUgZ3JhcGhcbiAgICBsZXQgbGV2ZWxXaWR0aCA9IFsxXTtcbiAgICBsZXQgY2hpbGRDb3VudCA9IGZ1bmN0aW9uIChsZXZlbCwgbikge1xuXG4gICAgICBpZiAobi5jaGlsZHJlbiAmJiBuLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGxldmVsV2lkdGgubGVuZ3RoIDw9IGxldmVsICsgMSkgbGV2ZWxXaWR0aC5wdXNoKDApO1xuXG4gICAgICAgIGxldmVsV2lkdGhbbGV2ZWwgKyAxXSArPSBuLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgY2hpbGRDb3VudChsZXZlbCArIDEsIGQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkQ291bnQoMCwgcm9vdCk7XG4gICAgbGV0IG5ld0hlaWdodCA9IGQzLm1heChsZXZlbFdpZHRoKSAqIDEwMDtcblxuICAgIGxldCB0cmVlbWFwID0gZDMudHJlZSgpLnNpemUoW25ld0hlaWdodCwgdGhpcy53aWR0aF0pO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguY29sbGFwc2VkKSB7XG4gICAgICByb290LmNoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZS5jYWxsKHRoaXMsIHJvb3QpO1xuXG4gICAgZnVuY3Rpb24gY29sbGFwc2UoZCkge1xuICAgICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICBkLl9jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKTtcbiAgICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKHNvdXJjZSkge1xuICAgICAgbGV0IHRyZWVEYXRhID0gdHJlZW1hcChyb290KTtcblxuICAgICAgbGV0IG5vZGVzID0gdHJlZURhdGEuZGVzY2VuZGFudHMoKSxcbiAgICAgICAgbGlua3MgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLnNsaWNlKDEpO1xuXG4gICAgICBub2Rlcy5mb3JFYWNoKGQgPT4gZC55ID0gZC5kZXB0aCAqIDE4MCk7XG5cbiAgICAgIGxldCBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rcycpO1xuXG4gICAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rcycpO1xuICAgICAgfVxuXG4gICAgICBsZXQgbGluayA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuZGF0YShsaW5rcywgZCA9PiBkLmlkIHx8IChkLmlkID0gKytpKSk7XG5cbiAgICAgIGxldCBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1lZGdlJylcbiAgICAgICAgLmF0dHIoJ2QnLCAoKSA9PiB7XG4gICAgICAgICAgbGV0IG8gPSB7eDogc291cmNlLngwLCB5OiBzb3VyY2UueTB9O1xuICAgICAgICAgIHJldHVybiBkaWFnb25hbChvLCBvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxpbmtFbnRlci5tZXJnZShsaW5rKVxuICAgICAgICAudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKS5hdHRyKCdkJywgZCA9PiBkaWFnb25hbChkLCBkLnBhcmVudCkpO1xuXG4gICAgICBsaW5rLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCdkJywgKCkgPT4ge1xuICAgICAgICAgIGxldCBvID0ge3g6IHNvdXJjZS54LCB5OiBzb3VyY2UueX07XG4gICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pO1xuICAgICAgICB9KS5yZW1vdmUoKTtcblxuICAgICAgbGlua0dyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktZWRnZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnI2NjYycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzFweCcpO1xuXG4gICAgICBub2Rlcy5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIGQueDAgPSBkLng7XG4gICAgICAgIGQueTAgPSBkLnk7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gZGlhZ29uYWwocywgZCkge1xuICAgICAgICByZXR1cm4gYE0gJHtzLnl9ICR7cy54fVxuICAgICAgICAgICAgQyAkeyhzLnkgKyBkLnkpIC8gMn0gJHtzLnh9LFxuICAgICAgICAgICAgICAkeyhzLnkgKyBkLnkpIC8gMn0gJHtkLnh9LFxuICAgICAgICAgICAgICAke2QueX0gJHtkLnh9YDtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGVzJyk7XG5cbiAgICAgIGlmICghbm9kZUdyb3VwLm5vZGUoKSkge1xuICAgICAgICBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpXG4gICAgICAgIC5kYXRhKG5vZGVzLCBkID0+IGQuaWQgfHwgKGQuaWQgPSArK2kpKTtcblxuICAgICAgbGV0IG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGUnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKCkgPT4gYHRyYW5zbGF0ZSgke3NvdXJjZS55MH0sJHtzb3VyY2UueDB9KWApO1xuXG4gICAgICBub2RlRW50ZXIuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQuZGF0YS50eXBlKSkuc2l6ZShkID0+IGQuZGF0YS5zaXplICogMTAwKSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1zeW1ib2wnKTtcblxuICAgICAgbm9kZUVudGVyLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWwnKVxuICAgICAgICAuYXR0cigneCcsIGQgPT4gLShkLmRhdGEudGl0bGUubGVuZ3RoICogMi41KSlcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAncG9pbnRlcicgOiAnZGVmYXVsdCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZC5kYXRhLnRpdGxlKTtcblxuICAgICAgbGV0IG5vZGVVcGRhdGUgPSBub2RlRW50ZXIubWVyZ2Uobm9kZSk7XG5cbiAgICAgIG5vZGVVcGRhdGUudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueX0sJHtkLnh9KWApO1xuXG4gICAgICBub2RlLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoKSA9PiBgdHJhbnNsYXRlKCR7c291cmNlLnl9LCR7c291cmNlLnh9KWApXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgbm9kZUdyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktc3ltYm9sJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ2xpZ2h0c3RlZWxibHVlJyA6IEdyYXBoLmNvbG9ycyhkLmRhdGEubGF5ZXIgKiA1KSlcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAncG9pbnRlcicgOiAnZGVmYXVsdCcpO1xuXG4gICAgICBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpO1xuICAgICAgXG4gICAgICBpZiAobm9kZS5ub2RlKCkpIHtcbiAgICAgICAgdGhpcy5fYXBwbHlFdmVudHMobm9kZSk7XG5cbiAgICAgICAgbGV0IG5vZGVPbkNsaWNrID0gbm9kZS5vbignY2xpY2snKTtcbiAgICAgICAgbm9kZS5vbignY2xpY2snLCAoZCkgPT4ge1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgICAgbm9kZU9uQ2xpY2suY2FsbCh0aGlzLCBkLmRhdGEpO1xuICAgICAgICAgIC8vIGRlZmF1bHQsIGhpZ2hsaWdodCBjb25uZWN0ZWQgbm9kZXNcbiAgICAgICAgICBjbGljay5jYWxsKHRoaXMsIGQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gVG9nZ2xlIGNoaWxkcmVuIG9uIGNsaWNrLlxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICBmdW5jdGlvbiBjbGljayhkKSB7XG4gICAgICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBkLl9jaGlsZHJlbjtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlLmNhbGwoc2VsZiwgZCk7XG4gICAgICB9XG5cbiAgICAgIFJlZ2lzdGVyTWF0aEpheCh0aGlzLlNWR1BhcmVudCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnBhcmVudC56b29tVG9GaXQoKTtcbiAgICAgIH0sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIGZsYXQgZGF0YSBpbnRvIHRyZWUgZGF0YSBieSBhbmFseXNpbmcgdGhlIHBhcmVudHMgb2YgZWFjaCBub2RlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBkYXRhIHRyYW5zZm9ybWVkIGluIHRyZWUgZGF0YVxuICAgKi9cbiAgZ2V0IHRyZWVEYXRhKCkge1xuICAgIGxldCBjYW52YXNOb2RlcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMpIDogW107XG4gICAgbGV0IGRhdGFNYXAgPSBjYW52YXNOb2Rlcy5yZWR1Y2UoZnVuY3Rpb24gKG1hcCwgbm9kZSkge1xuICAgICAgbWFwW25vZGUuaWRdID0gbm9kZTtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30pO1xuICAgIGxldCB0cmVlRGF0YSA9IFtdO1xuICAgIGNhbnZhc05vZGVzLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgbGV0IHBhcmVudCA9IGRhdGFNYXBbbm9kZS5wYXJlbnRdO1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAocGFyZW50LmNoaWxkcmVuIHx8IChwYXJlbnQuY2hpbGRyZW4gPSBbXSkpLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdHJlZURhdGEucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJlZURhdGFbMF07XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC10cmVlLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0TWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ21lbnVzJylcbiAgcmVuZGVyKCkge1xuXG4gICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5zZWxlY3QoJ2Rpdi5mcmFuY3ktY29udGV4dC1tZW51LWhvbGRlcicpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICB9XG5cbiAgICBsZXQgcG9zID0gZDMubW91c2UodGhpcy5TVkdQYXJlbnQubm9kZSgpKTtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnbGVmdCcsIHBvc1swXSArIDUgKyAncHgnKS5zdHlsZSgndG9wJywgcG9zWzFdICsgNSArICdweCcpO1xuXG4gICAgLy8gc2hvdyB0aGUgY29udGV4dCBtZW51XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZGVzdHJveSBtZW51XG4gICAgZDMuc2VsZWN0KCdib2R5Jykub24oJ2NsaWNrLmZyYW5jeS1jb250ZXh0LW1lbnUnLCAoKSA9PiB0aGlzLnVucmVuZGVyKCkpO1xuXG4gICAgLy8gdGhpcyBnZXRzIGV4ZWN1dGVkIHdoZW4gYSBjb250ZXh0bWVudSBldmVudCBvY2N1cnNcbiAgICBsZXQgbWVudSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZXh0LW1lbnUnKS5hcHBlbmQoJ3VsJyk7XG4gICAgbGV0IG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXModGhpcy5kYXRhLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZShtZW51LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgbnVsbCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzIH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWlyZWRBcmdzTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGxldCBtb2RhbElkID0gdGhpcy5kYXRhLmNhbGxiYWNrLmlkO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbGxiYWNrIE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5ob2xkZXIuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2lkJywgbW9kYWxJZClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwnKTtcblxuICAgIGxldCBmb3JtID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZm9ybScpO1xuXG4gICAgbGV0IGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBsZXQgaGVhZGVyVGl0bGUgPSBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbCgnUmVxdWlyZWQgYXJndW1lbnRzJm5ic3A7Jyk7XG4gICAgaWYgKHRoaXMuZGF0YS50aXRsZSkge1xuICAgICAgaGVhZGVyVGl0bGUuYXBwZW5kKCdzcGFuJykuYXR0cignc3R5bGUnLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JykudGV4dChgZm9yICR7dGhpcy5kYXRhLnRpdGxlfWApO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBmb3IgKGxldCBhcmcgb2YgT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgbGV0IHJvdyA9IGNvbnRlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnbGFiZWwnKS5hdHRyKCdmb3InLCBhcmcuaWQpLnRleHQoYXJnLnRpdGxlKTtcbiAgICAgIGxldCBpbnB1dCA9IHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdpbnB1dCcpLmF0dHIoJ2lkJywgYXJnLmlkKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJnJylcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2lucHV0JywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdrZXl1cCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigncGFzdGUnLCB0aGlzLm9uY2hhbmdlKTtcbiAgICAgIC8vIHdhaXQsIGlmIGl0IGlzIGJvb2xlYW4gd2UgY3JlYXRlIGEgY2hlY2tib3hcbiAgICAgIGlmIChhcmcudHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIC8vIHdlbGwsIGEgY2hlY2tib3ggd29ya3MgdGhpcyB3YXkgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIFxuICAgICAgICAvLyB0aGUgdmFsdWUgdG8gZmFsc2UgYW5kIHVwZGF0ZSB0aGUgdmFsdWUgYmFzZWQgb24gdGhlIGNoZWNrZWQgXG4gICAgICAgIC8vIHByb3BlcnR5IHRoYXQgdHJpZ2dlcnMgdGhlIG9uY2hhbmdlIGV2ZW50XG4gICAgICAgIGFyZy52YWx1ZSA9IGFyZy52YWx1ZSB8fCBmYWxzZTtcbiAgICAgICAgaW5wdXQuYXR0cigndHlwZScsICdjaGVja2JveCcpLmF0dHIoJ3JlcXVpcmVkJywgbnVsbClcbiAgICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHsgc2VsZi5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWUgPSB0aGlzLmNoZWNrZWQ7IH0pO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3ZhbGlkaXR5Jyk7XG4gICAgfVxuXG4gICAgbGV0IGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGZvcm0ubm9kZSgpLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZWxmLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKHNlbGYuZGF0YS5jYWxsYmFjayk7XG4gICAgICAgIHNlbGYudW5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdDYW5jZWwnKS5vbignY2xpY2snLCB0aGlzLnVucmVuZGVyKTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoWycuZnJhbmN5JywgJy5mcmFuY3ktYXJnJywgJy5mcmFuY3ktb3ZlcmxheScsICcuZnJhbmN5LW1vZGFsJ10pO1xuXG4gICAgbGV0IGlucHV0RWxlbWVudCA9IGNvbnRlbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWFyZycpLm5vZGUoKTtcbiAgICBpZiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICBpbnB1dEVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgTW9kYWwgdXBkYXRlZCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwiaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IHsgUmVnaXN0ZXJNYXRoSmF4IH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY0dyYXBoIGV4dGVuZHMgR3JhcGgge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgbGV0IHNpbXVsYXRpb25BY3RpdmUgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnNpbXVsYXRpb247XG5cbiAgICBsZXQgY2FudmFzTm9kZXMgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzKSA6IFtdLFxuICAgICAgY2FudmFzTGlua3MgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmxpbmtzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmxpbmtzKSA6IFtdO1xuXG4gICAgbGV0IGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGlua3MnKTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rJykuZGF0YSgpO1xuICAgIGxldCBsaW5rc1RvQWRkID0gdGhpcy5fZmlsdGVyTmV3RWxlbWVudHMoY2FudmFzTGlua3MsIGxpbmtzKTtcblxuICAgIGxldCBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluaycpLmRhdGEobGlua3NUb0FkZCwgZCA9PiBkLmlkKTtcblxuICAgIGxldCBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgfVxuXG4gICAgbGV0IG5vZGVzID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpLmRhdGEoKTtcbiAgICBsZXQgbm9kZXNUb0FkZCA9IHRoaXMuX2ZpbHRlck5ld0VsZW1lbnRzKGNhbnZhc05vZGVzLCBub2Rlcyk7XG5cbiAgICBsZXQgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKS5kYXRhKG5vZGVzVG9BZGQsIGQgPT4gZC5pZCk7XG5cbiAgICBpZiAobm9kZS5leGl0KCkuZGF0YSgpLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgbm9kZS5lbnRlcigpLmRhdGEoKS5sZW5ndGggPT09IDAgJiZcbiAgICAgIGxpbmsuZW50ZXIoKS5kYXRhKCkubGVuZ3RoID09PSAwICYmXG4gICAgICBsaW5rLmV4aXQoKS5kYXRhKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluaycpO1xuXG4gICAgbGlua0VudGVyLmFwcGVuZCgnbGluZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1lZGdlJyk7XG5cbiAgICBsaW5rLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rIGxpbmUuZnJhbmN5LWVkZ2UnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdkaXJlY3RlZCcpIHtcbiAgICAgIC8vIHRoaXMgbWVhbnMgd2UgbmVlZCBhcnJvd3MsIHNvIHdlIGFwcGVuZCB0aGUgbWFya2VyXG4gICAgICBzZWxmLnBhcmVudC5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFycm93cycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdHlsZSBvZiB0aGUgbGlua1xuICAgICAgbGluay5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuICAgIH1cblxuICAgIGxldCBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZScpLmF0dHIoJ2lkJywgZCA9PiBkLmlkKTtcblxuICAgIG5vZGVFbnRlci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiAxMDApKVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDUpKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiAnZnJhbmN5LXN5bWJvbCcgKyAoZC5oaWdobGlnaHQgPyAnIGZyYW5jeS1oaWdobGlnaHQnIDogJycpICsgKE9iamVjdC52YWx1ZXMoZC5tZW51cykubGVuZ3RoID8gJyBmcmFuY3ktY29udGV4dCcgOiAnJykpO1xuXG4gICAgbm9kZUVudGVyLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVsJylcbiAgICAgIC5hdHRyKCd4JywgZCA9PiAtKGQudGl0bGUubGVuZ3RoICogMi41KSlcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSk7XG5cbiAgICBub2RlLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5kcmFnKSB7XG4gICAgICBub2RlLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZSAmJiAhbm9kZS5lbXB0eSgpKSB7XG5cbiAgICAgIHRoaXMuX2FwcGx5RXZlbnRzKG5vZGUpO1xuXG4gICAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5zaG93TmVpZ2hib3Vycykge1xuICAgICAgICBsZXQgbm9kZU9uQ2xpY2sgPSBub2RlLm9uKCdjbGljaycpO1xuICAgICAgICBub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgICAgY29ubmVjdGVkTm9kZXMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgICAgbm9kZU9uQ2xpY2suY2FsbCh0aGlzLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgIC8vaXRlcmF0ZSB0aHJvdWdoIHRoZSBkYXRhIGFuZCByZWNhbGN1bGF0ZSBpdHMgc2l6ZVxuICAgICAgbm9kZS5lYWNoKGZ1bmN0aW9uKGQpe1xuICAgICAgICBsZXQgYm91bmQgPSB0aGlzLmdldEJCb3goKTtcbiAgICAgICAgcmV0dXJuIGQuc2l6ZSA9IGJvdW5kLndpZHRoO1xuICAgICAgfSk7XG4gICAgICAvLyBDYW52YXMgRm9yY2VzXG4gICAgICBsZXQgY2VudGVyRm9yY2UgPSBkMy5mb3JjZUNlbnRlcigpLngodGhpcy53aWR0aCAvIDIpLnkodGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgIGxldCBtYW55Rm9yY2UgPSBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLWNhbnZhc05vZGVzLmxlbmd0aCAqIDUwKTtcbiAgICAgIGxldCBsaW5rRm9yY2UgPSBkMy5mb3JjZUxpbmsoY2FudmFzTGlua3MpLmlkKGQgPT4gZC5pZCkuZGlzdGFuY2UoNTApO1xuICAgICAgbGV0IGNvbGxpZGVGb3JjZSA9IGQzLmZvcmNlQ29sbGlkZShkID0+IGQuc2l6ZSk7XG5cbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgICAgbGV0IGZvcmNlWCA9IGQzLmZvcmNlWCh0aGlzLndpZHRoIC8gMikuc3RyZW5ndGgoMC4wNSk7XG5cbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWSBwb3NpdGlvbiAtIHVuZGlyZWN0ZWQvZGlyZWN0ZWQgZ3JhcGhzIGZhbGwgaGVyZVxuICAgICAgbGV0IGZvcmNlWSA9IGQzLmZvcmNlWSh0aGlzLmhlaWdodCAvIDIpLnN0cmVuZ3RoKDAuMjUpO1xuXG4gICAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC50eXBlID09PSAnaGFzc2UnKSB7XG4gICAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgICAgICBmb3JjZVggPSBkMy5mb3JjZVgodGhpcy53aWR0aCAvIDIpLnN0cmVuZ3RoKDAuMyk7XG4gICAgICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXIgdG8gc2ltdWxhdGUgdGhlIGhhc3NlIGRpYWdyYW1cbiAgICAgICAgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIDc1KS5zdHJlbmd0aCgwLjcpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpLm5vZGVzKG5vZGVzVG9BZGQpXG4gICAgICAgIC5mb3JjZSgnY2hhcmdlJywgbWFueUZvcmNlKVxuICAgICAgICAuZm9yY2UoJ2xpbmsnLCBsaW5rRm9yY2UpXG4gICAgICAgIC5mb3JjZSgnY2VudGVyJywgY2VudGVyRm9yY2UpXG4gICAgICAgIC5mb3JjZSgneCcsIGZvcmNlWClcbiAgICAgICAgLmZvcmNlKCd5JywgZm9yY2VZKVxuICAgICAgICAuZm9yY2UoJ2NvbGxpZGUnLCBjb2xsaWRlRm9yY2UpXG4gICAgICAgIC5vbigndGljaycsIHRpY2tlZClcbiAgICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyB6b29tIHRvIGZpdCB3aGVuIHNpbXVsYXRpb24gaXMgb3ZlclxuICAgICAgICAgIHNlbGYucGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgLy9mb3JjZSBzaW11bGF0aW9uIHJlc3RhcnRcbiAgICAgIHNpbXVsYXRpb24uYWxwaGEoMC41KS5yZXN0YXJ0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gd2VsbCwgc2ltdWxhdGlvbiBpcyBvZmYsIGFwcGx5IGZpeGVkIHBvc2l0aW9ucyBhbmQgem9vbSB0byBmaXQgbm93XG4gICAgICB0aWNrZWQoKTtcbiAgICAgIHNlbGYucGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZS5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgbGV0IHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgbGV0IGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7aX0sJHtpfWBdID0gMTtcbiAgICB9XG5cbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7ZC5zb3VyY2UuaW5kZXh9LCR7ZC50YXJnZXQuaW5kZXh9YF0gPSAxO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICAgIGZ1bmN0aW9uIG5laWdoYm9yaW5nKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGxpbmtlZEJ5SW5kZXhbYCR7YS5pbmRleH0sJHtiLmluZGV4fWBdO1xuICAgICAgfVxuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0b2dnbGUgPT09IDApIHtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wYWNpdHkgb2YgYWxsIGJ1dCB0aGUgbmVpZ2hib3VyaW5nIG5vZGVzXG4gICAgICAgIGxldCBkID0gZDMuc2VsZWN0KHRoaXMpLm5vZGUoKS5fX2RhdGFfXztcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIG8gPT4gbmVpZ2hib3JpbmcoZCwgbykgfHwgbmVpZ2hib3JpbmcobywgZCkgPyAxIDogMC4xKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIG8gPT4gZC5pbmRleCA9PT0gby5zb3VyY2UuaW5kZXggfHwgZC5pbmRleCA9PT0gby50YXJnZXQuaW5kZXggPyAxIDogMC4xKTtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wXG4gICAgICAgIHRvZ2dsZSA9IDE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9QdXQgdGhlbSBiYWNrIHRvIG9wYWNpdHk9MVxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgdG9nZ2xlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSAmJiBzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4wMSkucmVzdGFydCgpO1xuICAgICAgfVxuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSAmJiBzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICAgIFJlZ2lzdGVyTWF0aEpheCh0aGlzLlNWR1BhcmVudCk7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuICBcbiAgX2ZpbHRlck5ld0VsZW1lbnRzKGNhbnZhc09iamVjdHMsIGQzRWxlbWVudCkge1xuICAgIGxldCBuZXdFbGVtZW50cyA9IFtdO1xuICAgIGNhbnZhc09iamVjdHMuZm9yRWFjaChvID0+IHtcbiAgICAgIGxldCBsaW5rID0gZDNFbGVtZW50LmZpbmQoZCA9PiBkLmlkID09PSBvLmlkKTtcbiAgICAgIGlmIChsaW5rKSB7XG4gICAgICAgIG5ld0VsZW1lbnRzLnB1c2gobGluayk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3RWxlbWVudHMucHVzaChvKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3RWxlbWVudHM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC1nZW5lcmljLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEJhckNoYXJ0IGZyb20gJy4vY2hhcnQtYmFyJztcbmltcG9ydCBMaW5lQ2hhcnQgZnJvbSAnLi9jaGFydC1saW5lJztcbmltcG9ydCBTY2F0dGVyQ2hhcnQgZnJvbSAnLi9jaGFydC1zY2F0dGVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0RmFjdG9yeSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMuY2hhcnQnKVxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgbGV0IGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnR5cGUpIHtcbiAgICBjYXNlICdiYXInOlxuICAgICAgZWxlbWVudCA9IG5ldyBCYXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgZWxlbWVudCA9IG5ldyBMaW5lQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY2F0dGVyJzpcbiAgICAgIGVsZW1lbnQgPSBuZXcgU2NhdHRlckNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtZmFjdG9yeS5qcyIsImltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICB0aGlzLnhTY2FsZSA9IGQzLnNjYWxlQmFuZCgpLnJhbmdlKFswLCB0aGlzLndpZHRoXSkucGFkZGluZygwLjEpLmRvbWFpbih0aGlzLmF4aXMueC5kb21haW4pO1xuXG4gICAgaWYgKCF0aGlzLmF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB0aGlzLmF4aXMueC5kb21haW4gPSBDaGFydC5kb21haW5SYW5nZSh0aGlzLmFsbFZhbHVlcy5sZW5ndGggLyB0aGlzLmRhdGFzZXROYW1lcy5sZW5ndGgpO1xuICAgICAgdGhpcy54U2NhbGUuZG9tYWluKHRoaXMuYXhpcy54LmRvbWFpbik7XG4gICAgfVxuXG4gICAgbGV0IGJhcnNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWJhcnMnKTtcblxuICAgIGlmICghYmFyc0dyb3VwLm5vZGUoKSkge1xuICAgICAgYmFyc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1iYXJzJyk7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIFxuICAgIHRoaXMuZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgbGV0IGJhciA9IGJhcnNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktYmFyLSR7aW5kZXh9YCkuZGF0YShzZWxmLmRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBiYXIuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGxldCBiYXJFbnRlciA9IGJhci5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1iYXItJHtpbmRleH1gKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoc2VsZi5heGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5kYXRhc2V0TmFtZXMubGVuZ3RoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5kYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5oZWlnaHQgLSBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAwLjUpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGJhckVudGVyLm1lcmdlKGJhcilcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBzZWxmLnhTY2FsZShzZWxmLmF4aXMueC5kb21haW5baV0pICsgaW5kZXggKiAoc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLmRhdGFzZXROYW1lcy5sZW5ndGgpOyB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLmRhdGFzZXROYW1lcy5sZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLnlTY2FsZShkKTsgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYuaGVpZ2h0IC0gc2VsZi55U2NhbGUoZCk7IH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVuZGVyQXhpcygpO1xuICAgIHRoaXMuX3JlbmRlckxlZ2VuZCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWJhci5qcyIsImltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVDaGFydCBleHRlbmRzIENoYXJ0IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgbGV0IGxpbmVzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5lcycpO1xuXG4gICAgaWYgKCFsaW5lc0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGluZXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluZXMnKTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICBsZXQgdmFsdWVMaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoaSk7XG4gICAgICAgIH0pXG4gICAgICAgIC55KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZSA9IGxpbmVzR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LWxpbmUtJHtpbmRleH1gKS5kYXRhKFtzZWxmLmRhdGFzZXRzW2tleV1dKTtcblxuICAgICAgbGluZS5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgbGV0IGxpbmVFbnRlciA9IGxpbmUuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1saW5lLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ2QnLCB2YWx1ZUxpbmUpXG4gICAgICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utb3BhY2l0eScsIDAuNSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzEwcHgnKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utb3BhY2l0eScsIDEpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxpbmVFbnRlci5tZXJnZShsaW5lKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbmRlckF4aXMoKTtcbiAgICB0aGlzLl9yZW5kZXJMZWdlbmQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwiaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhdHRlckNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBzY2F0dGVyR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1zY2F0dGVycycpO1xuXG4gICAgaWYgKCFzY2F0dGVyR3JvdXAubm9kZSgpKSB7XG4gICAgICBzY2F0dGVyR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXNjYXR0ZXJzJyk7XG4gICAgfVxuICAgIFxuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgbGV0IHNjYXR0ZXIgPSBzY2F0dGVyR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LXNjYXR0ZXItJHtpbmRleH1gKS5kYXRhKHNlbGYuZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIHNjYXR0ZXIuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGxldCBzY2F0dGVyRW50ZXIgPSBzY2F0dGVyXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LXNjYXR0ZXItJHtpbmRleH1gKVxuICAgICAgICAuYXR0cigncicsIDUpXG4gICAgICAgIC5hdHRyKCdjeCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoaSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdjeScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAwLjUpXG4gICAgICAgICAgICAuYXR0cigncicsIDEwKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCA1KTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHNjYXR0ZXJFbnRlci5tZXJnZShzY2F0dGVyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbmRlckF4aXMoKTtcblxuICAgIHRoaXMuX3JlbmRlckxlZ2VuZCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LXNjYXR0ZXIuanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IEFib3V0TW9kYWwgZnJvbSAnLi9tb2RhbC1hYm91dCc7XG5pbXBvcnQgKiBhcyBTdmdUb1BuZyBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvc2F2ZS1zdmctYXMtcG5nL3NhdmVTdmdBc1BuZyc7XG5cbi8qIGdsb2JhbCBkMyB3aW5kb3cgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBhYm91dE1vZGFsID0gbmV3IEFib3V0TW9kYWwodGhpcy5vcHRpb25zKTtcblxuICAgIC8vIE90aGVyd2lzZSBjbGFzaGVzIHdpdGggdGhlIGNhbnZhcyBpdHNlbGYhXG4gICAgY29uc3QgbWVudUlkID0gYE1haW5NZW51LSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgIyR7bWVudUlkfWApO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgTWFpbiBNZW51IFske21lbnVJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tYWluLW1lbnUtaG9sZGVyJykuYXR0cignaWQnLCBtZW51SWQpO1xuICAgIH1cblxuICAgIC8vIEZvcmNlIHJlYnVpbGQgbWVudSBhZ2FpblxuICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ3VsJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudScpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMudGl0bGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoJ2xpJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRpdGxlJykuYXBwZW5kKCdhJykuaHRtbCh0aGlzLmRhdGEuY2FudmFzLnRpdGxlKTtcbiAgICB9XG5cbiAgICBsZXQgZW50cnkgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdsaScpO1xuICAgIGVudHJ5LmFwcGVuZCgnYScpLmh0bWwoJ0ZyYW5jeScpO1xuICAgIGxldCBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHRoaXMub3B0aW9ucy5hcHBlbmRUby5jYW52YXMuem9vbVRvRml0KCkpLmF0dHIoJ3RpdGxlJywgJ1pvb20gdG8gRml0JykuaHRtbCgnWm9vbSB0byBGaXQnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiBTdmdUb1BuZy5zYXZlU3ZnQXNQbmcodGhpcy5TVkdQYXJlbnQubm9kZSgpLCAnZGlhZ3JhbS5wbmcnKSkuYXR0cigndGl0bGUnLCAnU2F2ZSB0byBQTkcnKS5odG1sKCdTYXZlIHRvIFBORycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IGFib3V0TW9kYWwubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpKS5hdHRyKCd0aXRsZScsICdBYm91dCcpLmh0bWwoJ0Fib3V0Jyk7XG5cbiAgICAvLyBUcmF2ZXJzZSBhbGwgbWVudXMgYW5kIGZsYXR0ZW4gdGhlbSFcbiAgICBsZXQgbWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZSh0aGlzLmVsZW1lbnQsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYE1haW4gTWVudSB1cGRhdGVkIFske21lbnVJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LW1haW4uanMiLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgeyBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cywgc3ludGF4SGlnaGxpZ2h0IH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dE1vZGFsIGV4dGVuZHMgTW9kYWwge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBtb2RhbElkID0gJ0Fib3V0TW9kYWxXaW5kb3cnO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEFib3V0IE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5ob2xkZXIuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2lkJywgbW9kYWxJZClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwnKTtcblxuICAgIGxldCBmb3JtID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZm9ybScpO1xuXG4gICAgbGV0IGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbChgQWJvdXQgRnJhbmN5IHYke3RoaXMuZGF0YS52ZXJzaW9uIHx8ICdOL0EnfWApO1xuXG4gICAgbGV0IGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLnRleHQoJ0xvYWRlZCBPYmplY3Q6Jyk7XG4gICAgY29udGVudC5hcHBlbmQoJ3ByZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmh0bWwoc3ludGF4SGlnaGxpZ2h0KEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YS5jYW52YXMsIG51bGwsIDIpKSk7XG4gICAgY29udGVudC5hcHBlbmQoJ3NwYW4nKS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9tY21hcnRpbnMvZnJhbmN5JykudGV4dCgnRnJhbmN5IG9uIEdpdGh1YicpO1xuXG4gICAgbGV0IGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsIHRoaXMudW5yZW5kZXIpO1xuXG4gICAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgd2hlbiB1c2luZyB0aGlzIG1vZGFsIGluIEp1cHl0ZXJcbiAgICBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhbJy5mcmFuY3knLCAnLmZyYW5jeS1hcmcnLCAnLmZyYW5jeS1vdmVybGF5JywgJy5mcmFuY3ktbW9kYWwnXSk7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgQWJvdXQgdXBkYXRlZCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwtYWJvdXQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMub3ZlcmxheSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhvbGRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICBcbiAgX2luaXRpYWxpemUoKSB7XG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICB0aGlzLm92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1vdmVybGF5Jyk7XG4gICAgdGhpcy5ob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICB9XG4gIFxuICB1bnJlbmRlcigpIHtcbiAgICB0aGlzLm92ZXJsYXkucmVtb3ZlKCk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgIHRoaXMuaG9sZGVyLnJlbW92ZSgpO1xuICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwuanMiLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBvdXQkID0gdHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyB8fCB0eXBlb2YgZGVmaW5lICE9ICd1bmRlZmluZWQnICYmIHt9IHx8IHRoaXM7XG5cbiAgdmFyIGRvY3R5cGUgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIHN0YW5kYWxvbmU9XCJub1wiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyBcIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGRcIiBbPCFFTlRJVFkgbmJzcCBcIiYjMTYwO1wiPl0+JztcblxuICBmdW5jdGlvbiBpc0VsZW1lbnQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG9iaiBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiByZXF1aXJlRG9tTm9kZShlbCkge1xuICAgIGlmICghaXNFbGVtZW50KGVsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbiBIVE1MRWxlbWVudCBvciBTVkdFbGVtZW50IGlzIHJlcXVpcmVkOyBnb3QgJyArIGVsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc0V4dGVybmFsKHVybCkge1xuICAgIHJldHVybiB1cmwgJiYgdXJsLmxhc3RJbmRleE9mKCdodHRwJywwKSA9PSAwICYmIHVybC5sYXN0SW5kZXhPZih3aW5kb3cubG9jYXRpb24uaG9zdCkgPT0gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBpbmxpbmVJbWFnZXMoZWwsIGNhbGxiYWNrKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgdmFyIGltYWdlcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltYWdlJyksXG4gICAgICAgIGxlZnQgPSBpbWFnZXMubGVuZ3RoLFxuICAgICAgICBjaGVja0RvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAobGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICBjaGVja0RvbmUoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgIHZhciBocmVmID0gaW1hZ2UuZ2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwiaHJlZlwiKTtcbiAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICBpZiAoaXNFeHRlcm5hbChocmVmLnZhbHVlKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IHJlbmRlciBlbWJlZGRlZCBpbWFnZXMgbGlua2luZyB0byBleHRlcm5hbCBob3N0czogXCIraHJlZi52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5jcm9zc09yaWdpbj1cImFub255bW91c1wiO1xuICAgICAgICBocmVmID0gaHJlZiB8fCBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICBpbWcuc3JjID0gaHJlZjtcbiAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBcImhyZWZcIiwgY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJykpO1xuICAgICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkIG5vdCBsb2FkIFwiK2hyZWYpO1xuICAgICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgfVxuICAgICAgfSkoaW1hZ2VzW2ldKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdHlsZXMoZWwsIG9wdGlvbnMsIGNzc0xvYWRlZENhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGVjdG9yUmVtYXAgPSBvcHRpb25zLnNlbGVjdG9yUmVtYXA7XG4gICAgdmFyIG1vZGlmeVN0eWxlID0gb3B0aW9ucy5tb2RpZnlTdHlsZTtcbiAgICB2YXIgY3NzID0gXCJcIjtcbiAgICAvLyBlYWNoIGZvbnQgdGhhdCBoYXMgZXh0cmFubCBsaW5rIGlzIHNhdmVkIGludG8gcXVldWUsIGFuZCBwcm9jZXNzZWRcbiAgICAvLyBhc3luY2hyb25vdXNseVxuICAgIHZhciBmb250c1F1ZXVlID0gW107XG4gICAgdmFyIHNoZWV0cyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcnVsZXMgPSBzaGVldHNbaV0uY3NzUnVsZXM7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlN0eWxlc2hlZXQgY291bGQgbm90IGJlIGxvYWRlZDogXCIrc2hlZXRzW2ldLmhyZWYpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJ1bGVzICE9IG51bGwpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIG1hdGNoOyBqIDwgcnVsZXMubGVuZ3RoOyBqKyssIG1hdGNoID0gbnVsbCkge1xuICAgICAgICAgIHZhciBydWxlID0gcnVsZXNbal07XG4gICAgICAgICAgaWYgKHR5cGVvZihydWxlLnN0eWxlKSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0b3JUZXh0O1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBzZWxlY3RvclRleHQgPSBydWxlLnNlbGVjdG9yVGV4dDtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGZvbGxvd2luZyBDU1MgcnVsZSBoYXMgYW4gaW52YWxpZCBzZWxlY3RvcjogXCInICsgcnVsZSArICdcIicsIGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmIChzZWxlY3RvclRleHQpIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JUZXh0KSB8fCBlbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JUZXh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIENTUyBzZWxlY3RvciBcIicgKyBzZWxlY3RvclRleHQgKyAnXCInLCBlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gc2VsZWN0b3JSZW1hcCA/IHNlbGVjdG9yUmVtYXAocnVsZS5zZWxlY3RvclRleHQpIDogcnVsZS5zZWxlY3RvclRleHQ7XG4gICAgICAgICAgICAgIHZhciBjc3NUZXh0ID0gbW9kaWZ5U3R5bGUgPyBtb2RpZnlTdHlsZShydWxlLnN0eWxlLmNzc1RleHQpIDogcnVsZS5zdHlsZS5jc3NUZXh0O1xuICAgICAgICAgICAgICBjc3MgKz0gc2VsZWN0b3IgKyBcIiB7IFwiICsgY3NzVGV4dCArIFwiIH1cXG5cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZihydWxlLmNzc1RleHQubWF0Y2goL15AZm9udC1mYWNlLykpIHtcbiAgICAgICAgICAgICAgLy8gYmVsb3cgd2UgYXJlIHRyeWluZyB0byBmaW5kIG1hdGNoZXMgdG8gZXh0ZXJuYWwgbGluay4gRS5nLlxuICAgICAgICAgICAgICAvLyBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgLy8gICAvLyAuLi5cbiAgICAgICAgICAgICAgLy8gICBzcmM6IGxvY2FsKCdBYmVsJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvYWJlbC92Ni9Vek4taWVqUjFWb1hVMk9jLTdMc2J2ZXNaVzJ4T1EteHNOcU80N201NURBLndvZmYyKTtcbiAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyBUaGlzIHJlZ2V4IHdpbGwgc2F2ZSBleHRybmFsIGxpbmsgaW50byBmaXJzdCBjYXB0dXJlIGdyb3VwXG4gICAgICAgICAgICAgIHZhciBmb250VXJsUmVnZXhwID0gL3VybFxcKFtcIiddPyguKz8pW1wiJ10/XFwpLztcbiAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBuZWVkcyB0byBiZSBjaGFuZ2VkIHRvIHN1cHBvcnQgbXVsdGlwbGUgdXJsIGRlY2xhcmF0aW9ucyBwZXIgZm9udC5cbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxNYXRjaCA9IHJ1bGUuY3NzVGV4dC5tYXRjaChmb250VXJsUmVnZXhwKTtcblxuICAgICAgICAgICAgICB2YXIgZXh0ZXJuYWxGb250VXJsID0gKGZvbnRVcmxNYXRjaCAmJiBmb250VXJsTWF0Y2hbMV0pIHx8ICcnO1xuICAgICAgICAgICAgICB2YXIgZm9udFVybElzRGF0YVVSSSA9IGV4dGVybmFsRm9udFVybC5tYXRjaCgvXmRhdGE6Lyk7XG4gICAgICAgICAgICAgIGlmIChmb250VXJsSXNEYXRhVVJJKSB7XG4gICAgICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGlnbm9yZSBkYXRhIHVyaSAtIHRoZXkgYXJlIGFscmVhZHkgZW1iZWRkZWRcbiAgICAgICAgICAgICAgICBleHRlcm5hbEZvbnRVcmwgPSAnJztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChleHRlcm5hbEZvbnRVcmwpIHtcbiAgICAgICAgICAgICAgICAvLyBva2F5LCB3ZSBhcmUgbHVja3kuIFdlIGNhbiBmZXRjaCB0aGlzIGZvbnQgbGF0ZXJcblxuICAgICAgICAgICAgICAgIC8vaGFuZGxlIHVybCBpZiByZWxhdGl2ZVxuICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbEZvbnRVcmwuc3RhcnRzV2l0aCgnLi4vJykpIHtcbiAgICAgICAgICAgICAgICAgIGV4dGVybmFsRm9udFVybCA9IHNoZWV0c1tpXS5ocmVmICsgJy8uLi8nICsgZXh0ZXJuYWxGb250VXJsXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChleHRlcm5hbEZvbnRVcmwuc3RhcnRzV2l0aCgnLi8nKSkge1xuICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxGb250VXJsID0gc2hlZXRzW2ldLmhyZWYgKyAnLy4nICsgZXh0ZXJuYWxGb250VXJsXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9udHNRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHJ1bGUuY3NzVGV4dCxcbiAgICAgICAgICAgICAgICAgIC8vIFBhc3MgdXJsIHJlZ2V4LCBzbyB0aGF0IG9uY2UgZm9udCBpcyBkb3dubGFkZWQsIHdlIGNhbiBydW4gYHJlcGxhY2UoKWAgb24gaXRcbiAgICAgICAgICAgICAgICAgIGZvbnRVcmxSZWdleHA6IGZvbnRVcmxSZWdleHAsXG4gICAgICAgICAgICAgICAgICBmb3JtYXQ6IGdldEZvbnRNaW1lVHlwZUZyb21VcmwoZXh0ZXJuYWxGb250VXJsKSxcbiAgICAgICAgICAgICAgICAgIHVybDogZXh0ZXJuYWxGb250VXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlLCB1c2UgcHJldmlvdXMgbG9naWNcbiAgICAgICAgICAgICAgICBjc3MgKz0gcnVsZS5jc3NUZXh0ICsgJ1xcbic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3cgYWxsIGNzcyBpcyBwcm9jZXNzZWQsIGl0J3MgdGltZSB0byBoYW5kbGUgc2NoZWR1bGVkIGZvbnRzXG4gICAgcHJvY2Vzc0ZvbnRRdWV1ZShmb250c1F1ZXVlKTtcblxuICAgIGZ1bmN0aW9uIGdldEZvbnRNaW1lVHlwZUZyb21VcmwoZm9udFVybCkge1xuICAgICAgdmFyIHN1cHBvcnRlZEZvcm1hdHMgPSB7XG4gICAgICAgICd3b2ZmMic6ICdmb250L3dvZmYyJyxcbiAgICAgICAgJ3dvZmYnOiAnZm9udC93b2ZmJyxcbiAgICAgICAgJ290Zic6ICdhcHBsaWNhdGlvbi94LWZvbnQtb3BlbnR5cGUnLFxuICAgICAgICAndHRmJzogJ2FwcGxpY2F0aW9uL3gtZm9udC10dGYnLFxuICAgICAgICAnZW90JzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0JyxcbiAgICAgICAgJ3NmbnQnOiAnYXBwbGljYXRpb24vZm9udC1zZm50JyxcbiAgICAgICAgJ3N2Zyc6ICdpbWFnZS9zdmcreG1sJ1xuICAgICAgfTtcbiAgICAgIHZhciBleHRlbnNpb25zID0gT2JqZWN0LmtleXMoc3VwcG9ydGVkRm9ybWF0cyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbaV07XG4gICAgICAgIC8vIFRPRE86IFRoaXMgaXMgbm90IGJ1bGxldCBwcm9vZiwgaXQgbmVlZHMgdG8gaGFuZGxlIGVkZ2UgY2FzZXMuLi5cbiAgICAgICAgaWYgKGZvbnRVcmwuaW5kZXhPZignLicgKyBleHRlbnNpb24pID4gMCkge1xuICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWRGb3JtYXRzW2V4dGVuc2lvbl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgeW91IHNlZSB0aGlzIGVycm9yIG1lc3NhZ2UsIHlvdSBwcm9iYWJseSBuZWVkIHRvIHVwZGF0ZSBjb2RlIGFib3ZlLlxuICAgICAgY29uc29sZS5lcnJvcignVW5rbm93biBmb250IGZvcm1hdCBmb3IgJyArIGZvbnRVcmwrICc7IEZvbnRzIG1heSBub3QgYmUgd29ya2luZyBjb3JyZWN0bHknKTtcbiAgICAgIHJldHVybiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzRm9udFF1ZXVlKHF1ZXVlKSB7XG4gICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBsb2FkIGZvbnRzIG9uZSBieSBvbmUgdW50aWwgd2UgaGF2ZSBhbnl0aGluZyBpbiB0aGUgcXVldWU6XG4gICAgICAgIHZhciBmb250ID0gcXVldWUucG9wKCk7XG4gICAgICAgIHByb2Nlc3NOZXh0KGZvbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm8gbW9yZSBmb250cyB0byBsb2FkLlxuICAgICAgICBjc3NMb2FkZWRDYWxsYmFjayhjc3MpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwcm9jZXNzTmV4dChmb250KSB7XG4gICAgICAgIC8vIFRPRE86IFRoaXMgY291bGQgYmVuZWZpdCBmcm9tIGNhY2hpbmcuXG4gICAgICAgIHZhciBvUmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZvbnRMb2FkZWQpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdHJhbnNmZXJGYWlsZWQpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgdHJhbnNmZXJGYWlsZWQpO1xuICAgICAgICBvUmVxLm9wZW4oJ0dFVCcsIGZvbnQudXJsKTtcbiAgICAgICAgb1JlcS5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICBvUmVxLnNlbmQoKTtcblxuICAgICAgICBmdW5jdGlvbiBmb250TG9hZGVkKCkge1xuICAgICAgICAgIC8vIFRPRE86IGl0IG1heSBiZSBhbHNvIHdvcnRoIHRvIHdhaXQgdW50aWwgZm9udHMgYXJlIGZ1bGx5IGxvYWRlZCBiZWZvcmVcbiAgICAgICAgICAvLyBhdHRlbXB0aW5nIHRvIHJhc3Rlcml6ZSB0aGVtLiAoZS5nLiB1c2UgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZvbnRGYWNlU2V0IClcbiAgICAgICAgICB2YXIgZm9udEJpdHMgPSBvUmVxLnJlc3BvbnNlO1xuICAgICAgICAgIHZhciBmb250SW5CYXNlNjQgPSBhcnJheUJ1ZmZlclRvQmFzZTY0KGZvbnRCaXRzKTtcbiAgICAgICAgICB1cGRhdGVGb250U3R5bGUoZm9udCwgZm9udEluQmFzZTY0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zZmVyRmFpbGVkKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBsb2FkIGZvbnQgZnJvbTogJyArIGZvbnQudXJsKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSlcbiAgICAgICAgICBjc3MgKz0gZm9udC50ZXh0ICsgJ1xcbic7XG4gICAgICAgICAgcHJvY2Vzc0ZvbnRRdWV1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlRm9udFN0eWxlKGZvbnQsIGZvbnRJbkJhc2U2NCkge1xuICAgICAgICAgIHZhciBkYXRhVXJsID0gJ3VybChcImRhdGE6JyArIGZvbnQuZm9ybWF0ICsgJztiYXNlNjQsJyArIGZvbnRJbkJhc2U2NCArICdcIiknO1xuICAgICAgICAgIGNzcyArPSBmb250LnRleHQucmVwbGFjZShmb250LmZvbnRVcmxSZWdleHAsIGRhdGFVcmwpICsgJ1xcbic7XG5cbiAgICAgICAgICAvLyBzY2hlZHVsZSBuZXh0IGZvbnQgZG93bmxvYWQgb24gbmV4dCB0aWNrLlxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwcm9jZXNzRm9udFF1ZXVlKHF1ZXVlKVxuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcnJheUJ1ZmZlclRvQmFzZTY0KGJ1ZmZlcikge1xuICAgICAgdmFyIGJpbmFyeSA9ICcnO1xuICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgIHZhciBsZW4gPSBieXRlcy5ieXRlTGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gd2luZG93LmJ0b2EoYmluYXJ5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXREaW1lbnNpb24oZWwsIGNsb25lLCBkaW0pIHtcbiAgICB2YXIgdiA9IChlbC52aWV3Qm94ICYmIGVsLnZpZXdCb3guYmFzZVZhbCAmJiBlbC52aWV3Qm94LmJhc2VWYWxbZGltXSkgfHxcbiAgICAgIChjbG9uZS5nZXRBdHRyaWJ1dGUoZGltKSAhPT0gbnVsbCAmJiAhY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkubWF0Y2goLyUkLykgJiYgcGFyc2VJbnQoY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkpKSB8fFxuICAgICAgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltXSB8fFxuICAgICAgcGFyc2VJbnQoY2xvbmUuc3R5bGVbZGltXSkgfHxcbiAgICAgIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKGRpbSkpO1xuICAgIHJldHVybiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnIHx8IHYgPT09IG51bGwgfHwgaXNOYU4ocGFyc2VGbG9hdCh2KSkpID8gMCA6IHY7XG4gIH1cblxuICBmdW5jdGlvbiByZUVuY29kZShkYXRhKSB7XG4gICAgZGF0YSA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLCBmdW5jdGlvbihtYXRjaCwgcDEpIHtcbiAgICAgIHZhciBjID0gU3RyaW5nLmZyb21DaGFyQ29kZSgnMHgnK3AxKTtcbiAgICAgIHJldHVybiBjID09PSAnJScgPyAnJTI1JyA6IGM7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChkYXRhKTtcbiAgfVxuXG4gIG91dCQucHJlcGFyZVN2ZyA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zLCBjYikge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuc2NhbGUgPSBvcHRpb25zLnNjYWxlIHx8IDE7XG4gICAgb3B0aW9ucy5yZXNwb25zaXZlID0gb3B0aW9ucy5yZXNwb25zaXZlIHx8IGZhbHNlO1xuICAgIHZhciB4bWxucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIjtcblxuICAgIGlubGluZUltYWdlcyhlbCwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdmFyIGNsb25lID0gZWwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgdmFyIHdpZHRoLCBoZWlnaHQ7XG4gICAgICBpZihlbC50YWdOYW1lID09ICdzdmcnKSB7XG4gICAgICAgIHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCBnZXREaW1lbnNpb24oZWwsIGNsb25lLCAnd2lkdGgnKTtcbiAgICAgICAgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgJ2hlaWdodCcpO1xuICAgICAgfSBlbHNlIGlmKGVsLmdldEJCb3gpIHtcbiAgICAgICAgdmFyIGJveCA9IGVsLmdldEJCb3goKTtcbiAgICAgICAgd2lkdGggPSBib3gueCArIGJveC53aWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gYm94LnkgKyBib3guaGVpZ2h0O1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGNsb25lLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJykucmVwbGFjZSgvdHJhbnNsYXRlXFwoLio/XFwpLywgJycpKTtcblxuICAgICAgICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3N2ZycpXG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZChjbG9uZSlcbiAgICAgICAgY2xvbmUgPSBzdmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBdHRlbXB0ZWQgdG8gcmVuZGVyIG5vbi1TVkcgZWxlbWVudCcsIGVsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ2ZXJzaW9uXCIsIFwiMS4xXCIpO1xuICAgICAgaWYgKCFjbG9uZS5nZXRBdHRyaWJ1dGUoJ3htbG5zJykpIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlTlMoeG1sbnMsIFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKTtcbiAgICAgIH1cbiAgICAgIGlmICghY2xvbmUuZ2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycpKSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zOnhsaW5rXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2l2ZSkge1xuICAgICAgICBjbG9uZS5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgICAgIGNsb25lLnJlbW92ZUF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWluWU1pbiBtZWV0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aWR0aCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgaGVpZ2h0ICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICB9XG5cbiAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgW1xuICAgICAgICBvcHRpb25zLmxlZnQgfHwgMCxcbiAgICAgICAgb3B0aW9ucy50b3AgfHwgMCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgICAgXS5qb2luKFwiIFwiKSk7XG5cbiAgICAgIHZhciBmb3MgPSBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCdmb3JlaWduT2JqZWN0ID4gKicpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFmb3NbaV0uZ2V0QXR0cmlidXRlKCd4bWxucycpKSB7XG4gICAgICAgICAgZm9zW2ldLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvdXRlci5hcHBlbmRDaGlsZChjbG9uZSk7XG5cbiAgICAgIC8vIEluIGNhc2Ugb2YgY3VzdG9tIGZvbnRzIHdlIG5lZWQgdG8gZmV0Y2ggZm9udCBmaXJzdCwgYW5kIHRoZW4gaW5saW5lXG4gICAgICAvLyBpdHMgdXJsIGludG8gZGF0YS11cmkgZm9ybWF0IChlbmNvZGUgYXMgYmFzZTY0KS4gVGhhdCdzIHdoeSBzdHlsZVxuICAgICAgLy8gcHJvY2Vzc2luZyBpcyBkb25lIGFzeW5jaG9ub3VzbHkuIE9uY2UgYWxsIGlubGluaW5nIGlzIGZpbnNoZWRcbiAgICAgIC8vIGNzc0xvYWRlZENhbGxiYWNrKCkgaXMgY2FsbGVkLlxuICAgICAgc3R5bGVzKGVsLCBvcHRpb25zLCBjc3NMb2FkZWRDYWxsYmFjayk7XG5cbiAgICAgIGZ1bmN0aW9uIGNzc0xvYWRlZENhbGxiYWNrKGNzcykge1xuICAgICAgICAvLyBoZXJlIGFsbCBmb250cyBhcmUgaW5saW5lZCwgc28gdGhhdCB3ZSBjYW4gcmVuZGVyIHRoZW0gcHJvcGVybHkuXG4gICAgICAgIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgICAgcy5pbm5lckhUTUwgPSBcIjwhW0NEQVRBW1xcblwiICsgY3NzICsgXCJcXG5dXT5cIjtcbiAgICAgICAgdmFyIGRlZnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkZWZzJyk7XG4gICAgICAgIGRlZnMuYXBwZW5kQ2hpbGQocyk7XG4gICAgICAgIGNsb25lLmluc2VydEJlZm9yZShkZWZzLCBjbG9uZS5maXJzdENoaWxkKTtcblxuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICB2YXIgb3V0SHRtbCA9IG91dGVyLmlubmVySFRNTDtcbiAgICAgICAgICBvdXRIdG1sID0gb3V0SHRtbC5yZXBsYWNlKC9OU1xcZCs6aHJlZi9naSwgJ3htbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHhsaW5rOmhyZWYnKTtcbiAgICAgICAgICBjYihvdXRIdG1sLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zdmdBc0RhdGFVcmkgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICBvdXQkLnByZXBhcmVTdmcoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHN2Zykge1xuICAgICAgdmFyIHVyaSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyB3aW5kb3cuYnRvYShyZUVuY29kZShkb2N0eXBlICsgc3ZnKSk7XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgY2IodXJpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc3ZnQXNQbmdVcmkgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmVuY29kZXJUeXBlID0gb3B0aW9ucy5lbmNvZGVyVHlwZSB8fCAnaW1hZ2UvcG5nJztcbiAgICBvcHRpb25zLmVuY29kZXJPcHRpb25zID0gb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyB8fCAwLjg7XG5cbiAgICB2YXIgY29udmVydFRvUG5nID0gZnVuY3Rpb24oc3JjLCB3LCBoKSB7XG4gICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY2FudmFzLndpZHRoID0gdztcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gICAgICBpZihvcHRpb25zLmNhbnZnKSB7XG4gICAgICAgIG9wdGlvbnMuY2FudmcoY2FudmFzLCBzcmMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3JjLCAwLCAwKTtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3Ipe1xuICAgICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG5nO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcG5nID0gY2FudmFzLnRvRGF0YVVSTChvcHRpb25zLmVuY29kZXJUeXBlLCBvcHRpb25zLmVuY29kZXJPcHRpb25zKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCh0eXBlb2YgU2VjdXJpdHlFcnJvciAhPT0gJ3VuZGVmaW5lZCcgJiYgZSBpbnN0YW5jZW9mIFNlY3VyaXR5RXJyb3IpIHx8IGUubmFtZSA9PSBcIlNlY3VyaXR5RXJyb3JcIikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZW5kZXJlZCBTVkcgaW1hZ2VzIGNhbm5vdCBiZSBkb3dubG9hZGVkIGluIHRoaXMgYnJvd3Nlci5cIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNiKHBuZyk7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5jYW52Zykge1xuICAgICAgb3V0JC5wcmVwYXJlU3ZnKGVsLCBvcHRpb25zLCBjb252ZXJ0VG9QbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQkLnN2Z0FzRGF0YVVyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnZlcnRUb1BuZyhpbWFnZSwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyB0aGUgZGF0YSBVUkkgYXMgYW4gaW1hZ2Ugb24gdGhlIGZvbGxvd2luZyBTVkdcXG4nLFxuICAgICAgICAgICAgd2luZG93LmF0b2IodXJpLnNsaWNlKDI2KSksICdcXG4nLFxuICAgICAgICAgICAgXCJPcGVuIHRoZSBmb2xsb3dpbmcgbGluayB0byBzZWUgYnJvd3NlcidzIGRpYWdub3Npc1xcblwiLFxuICAgICAgICAgICAgdXJpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlLnNyYyA9IHVyaTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG91dCQuZG93bmxvYWQgPSBmdW5jdGlvbihuYW1lLCB1cmkpIHtcbiAgICBpZiAobmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcbiAgICAgIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKHVyaVRvQmxvYih1cmkpLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNhdmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIGRvd25sb2FkU3VwcG9ydGVkID0gJ2Rvd25sb2FkJyBpbiBzYXZlTGluaztcbiAgICAgIGlmIChkb3dubG9hZFN1cHBvcnRlZCkge1xuICAgICAgICBzYXZlTGluay5kb3dubG9hZCA9IG5hbWU7XG4gICAgICAgIHNhdmVMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2F2ZUxpbmspO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBibG9iID0gdXJpVG9CbG9iKHVyaSk7XG4gICAgICAgICAgdmFyIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgc2F2ZUxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgICBzYXZlTGluay5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgb2JqZWN0IFVSTHMuIEZhbGxpbmcgYmFjayB0byBzdHJpbmcgVVJMLicpO1xuICAgICAgICAgIHNhdmVMaW5rLmhyZWYgPSB1cmk7XG4gICAgICAgIH1cbiAgICAgICAgc2F2ZUxpbmsuY2xpY2soKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzYXZlTGluayk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2luZG93Lm9wZW4odXJpLCAnX3RlbXAnLCAnbWVudWJhcj1ubyx0b29sYmFyPW5vLHN0YXR1cz1ubycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVyaVRvQmxvYih1cmkpIHtcbiAgICB2YXIgYnl0ZVN0cmluZyA9IHdpbmRvdy5hdG9iKHVyaS5zcGxpdCgnLCcpWzFdKTtcbiAgICB2YXIgbWltZVN0cmluZyA9IHVyaS5zcGxpdCgnLCcpWzBdLnNwbGl0KCc6JylbMV0uc3BsaXQoJzsnKVswXVxuICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICAgIHZhciBpbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnRBcnJheVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCbG9iKFtidWZmZXJdLCB7dHlwZTogbWltZVN0cmluZ30pO1xuICB9XG5cbiAgb3V0JC5zYXZlU3ZnID0gZnVuY3Rpb24oZWwsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvdXQkLnN2Z0FzRGF0YVVyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICBvdXQkLmRvd25sb2FkKG5hbWUsIHVyaSk7XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnNhdmVTdmdBc1BuZyA9IGZ1bmN0aW9uKGVsLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3V0JC5zdmdBc1BuZ1VyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICBvdXQkLmRvd25sb2FkKG5hbWUsIHVyaSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBpZiBkZWZpbmUgaXMgZGVmaW5lZCBjcmVhdGUgYXMgYW4gQU1EIG1vZHVsZVxuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gb3V0JDtcbiAgICB9KTtcbiAgfVxuXG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMubWVzc2FnZXMnKVxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgbWVzc2FnZXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgdHlwZTogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnR5cGUsXG4gICAgICAgIHRpdGxlOiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udGl0bGUsXG4gICAgICAgIHRleHQ6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50ZXh0XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgbGV0IGFsZXJ0c0lkID0gYE1lc3NhZ2VzLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgIyR7YWxlcnRzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGRpdiBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1lc3NhZ2UtaG9sZGVyJykuYXR0cignaWQnLCBhbGVydHNJZCk7XG4gICAgfVxuXG4gICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdkaXYuZnJhbmN5LWFsZXJ0JykuZGF0YShtZXNzYWdlcywgZCA9PiBkLmlkKTtcbiAgICBsZXQgbWVzc2FnZUVudGVyID0gbWVzc2FnZS5lbnRlcigpLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCBkID0+IGQuaWQpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+IGBmcmFuY3ktYWxlcnQgYWxlcnQtJHtkLnR5cGV9YCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICB9KTtcbiAgICBtZXNzYWdlRW50ZXIuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAnc3Ryb25nJykudGV4dChkID0+IGQudGl0bGUpO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS50ZXh0KGQgPT4gZC50ZXh0KTtcbiAgICBtZXNzYWdlRW50ZXIuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAnc3Ryb25nJykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpLnRleHQoJ3gnKTtcblxuICAgIG1lc3NhZ2VFbnRlci5tZXJnZShtZXNzYWdlKTtcblxuICAgIG1lc3NhZ2UuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=