"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.getPlacement = getPlacement;
exports.outputDescription = outputDescription;
exports.islabelHidden = islabelHidden;
exports.ifDefaultValue = ifDefaultValue;

var _react = _interopRequireDefault(require("react"));

var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));

/**
 * This file manages all of the Gravity Forms input settings.
 * Things such as: Input Mask, Required, Visibility
 */
function getPlacement(formSetting, fieldSettings) {
  return fieldSettings ? fieldSettings : formSetting;
}

function outputDescription(description, placement, currentPosition) {
  if (description && currentPosition === placement) {
    return _react.default.createElement("p", {
      className: `gravityforms__description gravityforms__description--${placement}`
    }, (0, _reactHtmlParser.default)(description));
  }

  return false;
}

function islabelHidden(label) {
  return label === 'hidden_label' ? true : false;
}

function ifDefaultValue(field) {
  return field['defaultValue'] !== 'undefined' ? field['defaultValue'] : false;
}