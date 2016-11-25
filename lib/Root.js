import './index.css';

import React from 'react';
import Home from './layouts/Home';
import Page from './layouts/Page';
import Post from './layouts/Post';

const Root = () => React.createElement(
	'div',
	null,
	React.createElement(
		'p',
		null,
		'123'
	)
);
/*
const Root = React.createClass({
	getDefaultProps: function() {
		return {params: location.pathname.split("/").slice(1)};
	},
	getInitialState: function() {
		console.log(this.props.params);

		// Query if params match page, post, etc.
		// Pass layout, content, etc. as state.
		// Below is just a temporary for example...

		return {layout: "Home"};
	},
	render: function() {
		switch (this.state.layout) {
			case "Home":
				return <Home/>;
			case "Page":
				return <Page/>;
			case "Post":
				return <Post/>;
			default:
				throw new Error("Invalid layout defined!");
		}
	}
});
*/
export default Root;