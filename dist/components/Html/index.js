"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));

var _inputSettings = require("../../utils/inputSettings");

const Html = ({
  className,
  content,
  description,
  descriptionPlacement,
  label,
  name,
  type,
  wrapClassName
}) => {
  return _react.default.createElement("div", {
    className: wrapClassName
  }, _react.default.createElement("label", {
    className: "gravityform__label",
    htmlFor: name
  }, label), (0, _inputSettings.outputDescription)(description, descriptionPlacement, 'above'), _react.default.createElement("div", {
    className: (0, _classnames.default)('gravityform__' + type + '__wrap', className)
  }, (0, _reactHtmlParser.default)(content)), (0, _inputSettings.outputDescription)(description, descriptionPlacement, 'below'));
};

var _default = Html;
exports.default = _default;
Html.propTypes = {
  className: _propTypes.default.string,
  content: _propTypes.default.string,
  description: _propTypes.default.string,
  descriptionPlacement: _propTypes.default.string,
  label: _propTypes.default.string,
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  wrapClassName: _propTypes.default.string
};