'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

require('./Header.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import logo from '../../../public/images/logo.svg';
//{logo}

var Header = function Header(_ref) {
	var params = _ref.params;

	return _react2.default.createElement(
		'div',
		{ className: 'include-header' },
		_react2.default.createElement(
			'nav',
			null,
			_react2.default.createElement(
				'ul',
				null,
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement('img', { src: '/images/logo.svg', className: 'logo', alt: 'logo' })
				),
				_react2.default.createElement(
					'li',
					null,
					'Menu1'
				),
				_react2.default.createElement(
					'li',
					null,
					'Menu2'
				)
			)
		)
	);
};

exports.default = Header;