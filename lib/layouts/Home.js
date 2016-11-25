import './Home.css';
import React from 'react';

import Header from '../includes/Header';
import Footer from '../includes/Footer';

const Home = () => {
	return React.createElement(
		'div',
		{ className: 'layout-home' },
		React.createElement(Header, null),
		React.createElement(
			'h2',
			null,
			'Home page..'
		),
		React.createElement(Footer, null)
	);
};

export default Home;