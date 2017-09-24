import React, {Component} from 'react';
import './counter.css';

class Counter extends React.Component {

	render() {
		return (
			<div className="counter">
				Done: <span>{this.props.allHalfItems}</span> / <span>{this.props.allItems}</span>
			</div>
		);
	}

}

export default Counter;