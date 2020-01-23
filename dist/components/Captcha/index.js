"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reaptcha = _interopRequireDefault(require("reaptcha"));

const Captcha = ({
  captchaTheme,
  errors,
  register,
  setValue,
  wrapClassName
}) => {
  if (!process.env.GATSBY_RECAPTCHA_SITE_KEY) {
    return _react.default.createElement("p", null, _react.default.createElement("strong", null, "To use reCAPTCHA, you need to sign up for an API key pair for your site and use it as a node environment variable named GATSBY_RECAPTCHA_SITE_KEY. The key pair consists of a site key and secret. The site key is used to display the widget on your site. Sign up for an API key pair at http://www.google.com/recaptcha."));
  }

  const captchaRef = (0, _react.useRef)(null);

  const _useState = (0, _react.useState)(false),
        isLoaded = _useState[0],
        setLoaded = _useState[1];

  const changeCaptchaToken = (token = '') => {
    setValue('g-recaptcha-response', token, true);
  };

  (0, _react.useEffect)(() => {
    if (isLoaded && errors && errors.message) {
      captchaRef.current.reset();
    }
  }, [errors, isLoaded]);
  return _react.default.createElement("div", {
    className: wrapClassName
  }, _react.default.createElement(_reaptcha.default, {
    onExpire: changeCaptchaToken,
    onLoad: () => setLoaded(true),
    onVerify: changeCaptchaToken,
    ref: captchaRef,
    sitekey: process.env.GATSBY_RECAPTCHA_SITE_KEY,
    theme: captchaTheme || 'light'
  }), _react.default.createElement("input", {
    name: "g-recaptcha-response",
    ref: register({}),
    type: "hidden"
  }), errors && _react.default.createElement("div", {
    className: "gravityform__error_message"
  }, errors.message));
};

Captcha.propTypes = {
  captchaTheme: _propTypes.default.string,
  errors: _propTypes.default.object,
  register: _propTypes.default.func,
  setValue: _propTypes.default.func,
  wrapClassName: _propTypes.default.string
};
var _default = Captcha;
exports.default = _default;