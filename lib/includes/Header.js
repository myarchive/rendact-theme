import './Header.css';
import React from 'react';

import logo from '../../../public/images/logo.svg';

const Header = ({ params }) => {
	return React.createElement(
		'div',
		{ className: 'include-header' },
		React.createElement(
			'nav',
			null,
			React.createElement(
				'ul',
				null,
				React.createElement(
					'li',
					null,
					React.createElement('img', { src: logo, className: 'logo', alt: 'logo' })
				),
				React.createElement(
					'li',
					null,
					'Menu1'
				),
				React.createElement(
					'li',
					null,
					'Menu2'
				)
			)
		)
	);
};

export default Header;