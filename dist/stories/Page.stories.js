"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LoggedOut = exports.LoggedIn = void 0;
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _testingLibrary = require("@storybook/testing-library");
var _Page = _interopRequireDefault(require("../components/Page"));
var _default = {
  title: 'Example/Page',
  component: _Page.default,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Page.default, args);
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
var LoggedOut = Template.bind({});
exports.LoggedOut = LoggedOut;
var LoggedIn = Template.bind({});
exports.LoggedIn = LoggedIn;
LoggedIn.play = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(_ref) {
    var canvasElement, canvas, loginButton;
    return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          canvasElement = _ref.canvasElement;
          canvas = (0, _testingLibrary.within)(canvasElement);
          _context.next = 4;
          return canvas.getByRole('button', {
            name: /Log in/i
          });
        case 4:
          loginButton = _context.sent;
          _context.next = 7;
          return _testingLibrary.userEvent.click(loginButton);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();