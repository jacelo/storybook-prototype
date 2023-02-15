"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LoggedOut = exports.LoggedIn = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = _interopRequireDefault(require("../components/Header"));
var _default = {
  title: 'Example/Header',
  component: _Header.default,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Header.default, args);
};
var LoggedIn = Template.bind({});
exports.LoggedIn = LoggedIn;
LoggedIn.args = {
  user: {
    name: 'Jane Doe'
  }
};
var LoggedOut = Template.bind({});
exports.LoggedOut = LoggedOut;
LoggedOut.args = {};