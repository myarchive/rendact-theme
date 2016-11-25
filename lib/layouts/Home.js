'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

require('./Home.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../includes/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../includes/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
	return _react2.default.createElement(
		'div',
		{ className: 'layout-home' },
		_react2.default.createElement(_Header2.default, null),
		_react2.default.createElement(
			'h2',
			null,
			'Home page..'
		),
		_react2.default.createElement(_Footer2.default, null)
	);
};

exports.default = Home;