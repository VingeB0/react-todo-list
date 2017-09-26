import React, {Component} from 'react';
import './title.css';

class Title extends React.Component {

	render() {
		return (
			<h1 className="title">Simple <span className="title__sub">React todo list</span></h1>
		);
	}

}

export default Title;