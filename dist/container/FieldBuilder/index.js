"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _Captcha = _interopRequireDefault(require("../../components/Captcha"));

var _Checkbox = _interopRequireDefault(require("../../components/Checkbox"));

var _Html = _interopRequireDefault(require("../../components/Html"));

var _Input = _interopRequireDefault(require("../../components/Input"));

var _Multiselect = _interopRequireDefault(require("../../components/Multiselect"));

var _Radio = _interopRequireDefault(require("../../components/Radio"));

var _Select = _interopRequireDefault(require("../../components/Select"));

var _Textarea = _interopRequireDefault(require("../../components/Textarea"));

var _helpers = require("../../utils/helpers");

var _inputSettings = require("../../utils/inputSettings");

const FieldBuilder = ({
  errors,
  formData,
  presetValues = {},
  register,
  setValue
}) => {
  // The top level settings for the whole form
  const formSettings = {
    descriptionPlacement: formData.descriptionPlacement
  }; // Loop through fields and create

  return formData.formFields.map(field => {
    // Set the wrapper classes
    let inputWrapperClass = (0, _classnames.default)('gravityform__field', 'gravityform__field__' + field.type, 'gravityform__field--' + field.size, field.cssClass, {
      'field-required': field.isRequired
    }, {
      'hidden-label': (0, _inputSettings.islabelHidden)(field.labelPlacement)
    });
    let errorKey = '';

    switch (field.type) {
      // Add note for unsupported captcha field
      case 'captcha':
        return _react.default.createElement(_Captcha.default, {
          captchaTheme: field.captchaTheme,
          errors: errors[`input_${field.id}`],
          key: field.id,
          register: register,
          setValue: setValue,
          wrapClassName: inputWrapperClass
        });
      // Start with the standard fields

      case 'text':
      case 'email':
      case 'phone':
        return _react.default.createElement(_Input.default, {
          className: field.cssClass,
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          errors: errors[`input_${field.id}`],
          inputMaskValue: field.inputMaskValue,
          key: field.id,
          label: field.label,
          maxLength: field.maxLength,
          name: `input_${field.id}`,
          placeholder: field.placeholder,
          register: register,
          required: field.isRequired,
          type: field.type,
          value: _lodash.default.get(presetValues, `input_${field.id}`, false) ? _lodash.default.get(presetValues, `input_${field.id}`, false) : (0, _inputSettings.ifDefaultValue)(field),
          wrapClassName: inputWrapperClass
        });

      case 'textarea':
        return _react.default.createElement(_Textarea.default, {
          className: field.cssClass,
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          errors: errors[`input_${field.id}`],
          inputMaskValue: field.inputMaskValue,
          key: field.id,
          label: field.label,
          maxLength: field.maxLength,
          name: `input_${field.id}`,
          placeholder: field.placeholder,
          register: register,
          required: field.isRequired,
          type: field.type,
          value: _lodash.default.get(presetValues, `input_${field.id}`, false) ? _lodash.default.get(presetValues, `input_${field.id}`, false) : (0, _inputSettings.ifDefaultValue)(field),
          wrapClassName: inputWrapperClass
        });

      case 'select':
        return _react.default.createElement(_Select.default, {
          className: field.cssClass,
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          errors: errors[`input_${field.id}`],
          key: field.id,
          label: field.label,
          name: `input_${field.id}`,
          options: JSON.parse(field.choices),
          register: register,
          required: field.isRequired,
          value: (0, _inputSettings.ifDefaultValue)(field),
          wrapClassName: inputWrapperClass
        });

      case 'multiselect':
        return _react.default.createElement(_Multiselect.default, {
          className: field.cssClass,
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          errors: errors[`input_${field.id}`],
          key: field.id,
          label: field.label,
          name: `input_${field.id}`,
          options: JSON.parse(field.choices),
          register: register,
          required: field.isRequired,
          value: (0, _inputSettings.ifDefaultValue)(field),
          wrapClassName: inputWrapperClass
        });

      case 'number':
        return _react.default.createElement(_Input.default, {
          className: field.cssClass,
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          errors: errors[`input_${field.id}`],
          inputMaskValue: field.inputMaskValue,
          key: field.id,
          label: field.label,
          maxLength: field.maxLength,
          name: `input_${field.id}`,
          placeholder: field.placeholder,
          register: register,
          required: field.isRequired,
          type: field.type,
          value: _lodash.default.get(presetValues, `input_${field.id}`, false) ? _lodash.default.get(presetValues, `input_${field.id}`, false) : (0, _inputSettings.ifDefaultValue)(field),
          wrapClassName: inputWrapperClass
        });

      case 'checkbox':
        errorKey = (0, _helpers.filteredKeys)(errors, RegExp(`input_${field.id}_`));
        return _react.default.createElement(_Checkbox.default, {
          className: field.cssClass,
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          errors: errorKey.length > 0 ? errors[errorKey[0]] : null,
          key: field.id,
          label: field.label,
          name: `input_${field.id}`,
          options: JSON.parse(field.choices),
          register: register,
          required: field.isRequired,
          wrapClassName: inputWrapperClass
        });

      case 'radio':
        errorKey = (0, _helpers.filteredKeys)(errors, RegExp(`input_${field.id}_`));
        return _react.default.createElement(_Radio.default, {
          className: field.cssClass,
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          errors: errorKey.length > 0 ? errors[errorKey[0]] : null,
          key: field.id,
          label: field.label,
          name: `input_${field.id}`,
          options: JSON.parse(field.choices),
          register: register,
          required: field.isRequired,
          wrapClassName: inputWrapperClass
        });

      case 'hidden':
        return _react.default.createElement(_Input.default, {
          className: field.cssClass,
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          errors: errors[`input_${field.id}`],
          key: field.id,
          label: field.label,
          name: `input_${field.id}`,
          placeholder: field.placeholder,
          register: register,
          required: field.isRequired,
          type: field.type,
          value: _lodash.default.get(presetValues, `input_${field.id}`, false) ? _lodash.default.get(presetValues, `input_${field.id}`, false) : (0, _inputSettings.ifDefaultValue)(field),
          wrapClassName: inputWrapperClass
        });

      case 'html':
        return _react.default.createElement(_Html.default, {
          className: field.cssClass,
          content: field.content,
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          key: field.id,
          label: field.label,
          name: `input_${field.id}`,
          type: field.type,
          wrapClassName: inputWrapperClass
        });

      default:
        return null;
    }
  });
};

var _default = FieldBuilder;
exports.default = _default;