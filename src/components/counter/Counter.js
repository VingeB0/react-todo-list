import React, {Component} from 'react';
import './counter.css';

class Counter extends React.Component {

	render() {
		return (
			<div className="counter">
				Done: <span>{this.props.getCountAllDoneItems}</span> / <span>{this.props.gelCountAllItems}</span>
			</div>
		);
	}

}

export default Counter;