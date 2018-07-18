"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("./devices.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iphone4s = function (_Component) {
  _inherits(iphone4s, _Component);

  function iphone4s() {
    _classCallCheck(this, iphone4s);

    return _possibleConstructorReturn(this, (iphone4s.__proto__ || Object.getPrototypeOf(iphone4s)).apply(this, arguments));
  }

  _createClass(iphone4s, [{
    key: "render",
    value: function render() {
      var color = void 0;
      this.props.color ? color = this.props.color : color = "black";

      return _react2.default.createElement(
        "div",
        { className: "marvel-device iphone4s " + color },
        _react2.default.createElement("div", { className: "top-bar" }),
        _react2.default.createElement("div", { className: "sleep" }),
        _react2.default.createElement("div", { className: "volume" }),
        _react2.default.createElement("div", { className: "camera" }),
        _react2.default.createElement("div", { className: "sensor" }),
        _react2.default.createElement("div", { className: "speaker" }),
        _react2.default.createElement(
          "div",
          { className: "screen" },
          _react2.default.createElement("iframe", { src: this.props.url })
        ),
        _react2.default.createElement("div", { className: "home" }),
        _react2.default.createElement("div", { className: "bottom-bar" })
      );
    }
  }]);

  return iphone4s;
}(_react.Component);

exports.default = iphone4s;


iphone4s.propTypes = {
  color: _propTypes2.default.string,
  url: _propTypes2.default.string
};