"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _inputSettings = require("../../utils/inputSettings");

var _strings = _interopRequireDefault(require("../../utils/strings"));

const Textarea = ({
  className,
  description,
  descriptionPlacement,
  errors,
  inputMaskValue,
  label,
  maxLength,
  name,
  placeholder,
  register,
  required,
  type,
  value,
  wrapClassName
}) => {
  const regex = inputMaskValue ? new RegExp(inputMaskValue) : false;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(wrapClassName, errors && 'gravityform__field--error')
  }, _react.default.createElement("label", {
    className: "gravityform__label",
    htmlFor: name
  }, label, maxLength > 0 && `(maxiumum ${maxLength} characters)`), (0, _inputSettings.outputDescription)(description, descriptionPlacement, 'above'), _react.default.createElement("textarea", {
    className: (0, _classnames.default)('gravityform__field__input', `gravityform__field__input__${type}`, className),
    defaultValue: value,
    id: name,
    maxLength: maxLength > 0 ? maxLength : undefined,
    name: name,
    placeholder: placeholder,
    ref: register({
      required: required && _strings.default.errors.required,
      maxlength: {
        value: maxLength > 0 && maxLength,
        message: maxLength > 0 && `${_strings.default.errors.maxChar.front}  ${maxLength} ${_strings.default.errors.maxChar.back}`
      },
      pattern: {
        value: regex,
        message: regex && _strings.default.errors.pattern
      }
    }),
    type: type
  }), (0, _inputSettings.outputDescription)(description, descriptionPlacement, 'below'), errors && _react.default.createElement("div", {
    className: "gravityform__error_message"
  }, errors.message));
};

var _default = Textarea;
exports.default = _default;
Textarea.propTypes = {
  className: _propTypes.default.string,
  description: _propTypes.default.string,
  descriptionPlacement: _propTypes.default.string,
  errors: _propTypes.default.obj,
  inputMaskValue: _propTypes.default.string,
  label: _propTypes.default.string,
  maxLength: _propTypes.default.number,
  name: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  register: _propTypes.default.func,
  required: _propTypes.default.bool,
  type: _propTypes.default.string,
  value: _propTypes.default.string,
  wrapClassName: _propTypes.default.string
};