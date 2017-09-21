import React, {Component} from 'react';
import './list-item.css';

class Item extends React.Component {

	render() {
		return (
			<li className={this.props.text.done === true ? "activeListItem" : null}>
				<input type="checkbox" onClick={() => this.props.baz(this.props.index)}/>
				<span>{this.props.text.text}</span>
				<button onClick={() => this.props.bar(this.props.index)}>x</button>
			</li>
		);
	}
}

export default Item;