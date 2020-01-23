"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _inputSettings = require("../../utils/inputSettings");

const Select = ({
  className,
  description,
  descriptionPlacement,
  handleChange,
  label,
  name,
  options,
  register,
  required,
  wrapClassName
}) => {
  return _react.default.createElement("div", {
    className: wrapClassName
  }, _react.default.createElement("label", {
    className: "gravityform__label",
    htmlFor: name
  }, label), (0, _inputSettings.outputDescription)(description, descriptionPlacement, 'above'), _react.default.createElement("select", {
    className: (0, _classnames.default)('gravityform__field__input', 'gravityform__field__input__select', className),
    id: name,
    name: name,
    onChange: handleChange,
    ref: register({
      required: required && 'This field is required'
    })
  }, options.map((choice, index) => {
    return _react.default.createElement("option", {
      defaultValue: choice.isSelected,
      key: `${name}-${index}`,
      value: choice.value
    }, choice.text);
  })), (0, _inputSettings.outputDescription)(description, descriptionPlacement, 'below'));
};

var _default = Select;
exports.default = _default;
Select.propTypes = {
  className: _propTypes.default.string,
  description: _propTypes.default.string,
  descriptionPlacement: _propTypes.default.string,
  handleChange: _propTypes.default.func,
  label: _propTypes.default.string,
  name: _propTypes.default.string,
  options: _propTypes.default.array,
  register: _propTypes.default.func,
  required: _propTypes.default.bool,
  wrapClassName: _propTypes.default.string
};