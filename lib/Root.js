'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

require('./Root.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Home = require('./layouts/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Page = require('./layouts/Page');

var _Page2 = _interopRequireDefault(_Page);

var _Post = require('./layouts/Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = _react2.default.createClass({
	getDefaultProps: function getDefaultProps() {
		return { params: location.pathname.split("/").slice(1) };
	},
	getInitialState: function getInitialState() {
		console.log(this.props.params);

		// Query if params match page, post, etc.
		// Pass layout, content, etc. as state.
		// Below is just a temporary for example...

		return { layout: "Home" };
	},
	render: function render() {
		switch (this.state.layout) {
			case "Home":
				return _react2.default.createElement(_Home2.default, null);
			case "Page":
				return _react2.default.createElement(_Page2.default, null);
			case "Post":
				return _react2.default.createElement(_Post2.default, null);
			default:
				throw new Error("Invalid layout defined!");
		}
	}
});

exports.default = Root;