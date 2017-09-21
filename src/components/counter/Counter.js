import React, {Component} from 'react';
import './counter.css';

class Counter extends React.Component {

	render() {
		return (
			<div>
				<span>{this.props.allItems}</span> / <span>{this.props.allHalfItems}</span>
			</div>
		);
	}

}

export default Counter;