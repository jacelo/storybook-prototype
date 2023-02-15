"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Small = exports.Secondary = exports.PrimaryWithHoverState = exports.PrimaryWithFocusState = exports.Primary = exports.Large = void 0;
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _testingLibrary = require("@storybook/testing-library");
var _Button = _interopRequireDefault(require("../components/Button"));
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: 'Example/Button',
  component: _Button.default,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args);
};
var Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.Primary = Primary;
Primary.args = {
  primary: true,
  label: 'Button'
};
var PrimaryWithFocusState = Template.bind({});
exports.PrimaryWithFocusState = PrimaryWithFocusState;
PrimaryWithFocusState.args = {
  primary: true,
  label: 'Button'
};
PrimaryWithFocusState.play = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(_ref) {
    var canvasElement, canvas;
    return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          canvasElement = _ref.canvasElement;
          // Starts querying the component from its root
          canvas = (0, _testingLibrary.within)(canvasElement); // Looks up the button and interacts with it.
          _context.next = 4;
          return canvas.getByRole('button').focus();
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();
var PrimaryWithHoverState = Template.bind({});
exports.PrimaryWithHoverState = PrimaryWithHoverState;
PrimaryWithHoverState.args = {
  primary: true,
  label: 'Button'
};
PrimaryWithHoverState.parameters = {
  pseudo: {
    hover: true
  }
};
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  label: 'Button'
};
var Large = Template.bind({});
exports.Large = Large;
Large.args = {
  size: 'large',
  label: 'Button'
};
var Small = Template.bind({});
exports.Small = Small;
Small.args = {
  size: 'small',
  label: 'Button'
};