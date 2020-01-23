"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (baseUrl, formData, lambdaEndpoint) {
    let lambaData = {
      baseUrl: baseUrl,
      payload: formData
    };
    let result;

    try {
      result = yield _axios.default.post(lambdaEndpoint, {
        responseType: 'json',
        withCredentials: true,
        crossdomain: true,
        data: lambaData
      });
    } catch (err) {
      // Pass back error
      return {
        status: 'error',
        data: err.response
      };
    }

    return {
      status: 'success',
      data: result
    };
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;