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

var Htcone = function (_Component) {
  _inherits(Htcone, _Component);

  function Htcone() {
    _classCallCheck(this, Htcone);

    return _possibleConstructorReturn(this, (Htcone.__proto__ || Object.getPrototypeOf(Htcone)).apply(this, arguments));
  }

  _createClass(Htcone, [{
    key: "render",
    value: function render() {
      var color = void 0;
      this.props.color ? color = this.props.color : color = "gold";

      return _react2.default.createElement(
        "div",
        { className: "marvel-device htc-one" },
        _react2.default.createElement("div", { className: "top-bar" }),
        _react2.default.createElement("div", { className: "camera" }),
        _react2.default.createElement("div", { className: "sensor" }),
        _react2.default.createElement("div", { className: "speaker" }),
        _react2.default.createElement(
          "div",
          { className: "screen" },
          _react2.default.createElement("iframe", { src: this.props.site })
        )
      );
    }
  }]);

  return Htcone;
}(_react.Component);

exports.default = Htcone;


Htcone.propTypes = {
  color: _propTypes2.default.string,
  site: _propTypes2.default.string
};