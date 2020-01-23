"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = _interopRequireDefault(require("react-hook-form/dist/react-hook-form.ie11"));

var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));

var _FormGeneralError = _interopRequireDefault(require("./components/FormGeneralError"));

var _FieldBuilder = _interopRequireDefault(require("./container/FieldBuilder"));

var _getForm = _interopRequireDefault(require("./utils/getForm"));

var _manageErrors = require("./utils/manageErrors");

var _manageFormData = require("./utils/manageFormData");

var _passToGravityForms = _interopRequireDefault(require("./utils/passToGravityForms"));

/**
 * Component to take Gravity Form graphQL data and turn into
 * a fully functional form.
 * @param mixed     formData    Form dataset from graphQL
 * @param int       id          Form ID from Gravity Forms
 * @param string    lambda      API link for Lambda functions when working with
 *                              netlify or similar
 */
const GravityFormForm = ({
  id,
  formData,
  lambda,
  presetValues = {}
}) => {
  // Pull in form functions
  const _useForm = (0, _reactHookForm.default)(),
        errors = _useForm.errors,
        handleSubmit = _useForm.handleSubmit,
        register = _useForm.register,
        setError = _useForm.setError,
        setValue = _useForm.setValue;

  const _useState = (0, _react.useState)(''),
        generalError = _useState[0],
        setGeneralError = _useState[1];

  const _useState2 = (0, _react.useState)(false),
        formLoading = _useState2[0],
        setLoadingState = _useState2[1]; // State for confirmation message


  const _useState3 = (0, _react.useState)(''),
        confirmationMessage = _useState3[0],
        setConfirmationMessage = _useState3[1]; // Take ID argument and graphQL Gravity Form data for this form


  const singleForm = (0, _getForm.default)(formData, id);

  const onSubmitCallback =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2.default)(function* (values) {
      // Make sure we are not already waiting for a response
      if (!formLoading) {
        // Clean error
        setGeneralError(''); // Check that at least one field has been filled in

        if ((0, _manageFormData.submissionHasOneFieldEntry)(values)) {
          setLoadingState(true);
          const restResponse = yield (0, _passToGravityForms.default)(singleForm.apiURL, values, lambda);
          setLoadingState(false);

          if (restResponse.status === 'error') {
            // Handle the errors
            // First check to make sure we have the correct data
            if (restResponse.data) {
              // Validation errors passed back by Gravity Forms
              const data = restResponse.data.data;

              if (data.status === 'gravityFormErrors') {
                // Pass messages to handle that sets react-hook-form errors
                (0, _manageErrors.handleGravityFormsValidationErrors)(data.validation_messages, setError);
              }
            } else {
              // Seemed to be an unknown issue
              setGeneralError('unknownError');
            }
          }

          if (restResponse.status === 'success') {
            setConfirmationMessage(restResponse.data.data.confirmation_message);
          }
        } else {
          setGeneralError('leastOneField');
        }
      }
    });

    return function onSubmitCallback(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  if (!confirmationMessage) {
    return singleForm && _react.default.createElement("form", {
      className: formLoading ? `gravityform gravityform--loading gravityform--id-${id}` : `gravityform gravityform--id-${id}`,
      id: `gravityform--id-${id}`,
      key: `gravityform--id-${id}`,
      onSubmit: handleSubmit(onSubmitCallback)
    }, generalError && _react.default.createElement(_FormGeneralError.default, {
      errorCode: generalError
    }), _react.default.createElement(_FieldBuilder.default, {
      errors: errors,
      formData: singleForm,
      formId: id,
      presetValues: presetValues,
      register: register,
      setValue: setValue
    }), _react.default.createElement("button", {
      className: "gravityform__button",
      type: "submit"
    }, singleForm.button.text ? singleForm.button.text : 'Submit', ' ', formLoading && _react.default.createElement("span", {
      className: "gravityform__button__loading_span"
    }, "Loading")));
  }

  return (0, _reactHtmlParser.default)(confirmationMessage);
};

var _default = GravityFormForm;
exports.default = _default;
GravityFormForm.defaultProps = {
  lambda: ''
};
GravityFormForm.propTypes = {
  formData: _propTypes.default.object.isRequired,
  id: _propTypes.default.number.isRequired,
  lambda: _propTypes.default.string
};