import React, {Component} from 'react';
import './list-item.css';

class Item extends React.Component {

	render() {
		console.log(this.props);
		return (
			<li className={this.props.text.done === true ? "list__item list__item--active" : "list__item"}>
				<input  className="list__input" id={"list__input-" + this.props.index} type="checkbox" onClick={() => this.props.baz(this.props.index)}/>
				<label htmlFor={"list__input-" + this.props.index} className="list__label"></label>
				<span>{this.props.text.text}</span>
				<button className="list__btn" onClick={() => this.props.bar(this.props.index)}>&#10799;</button>
			</li>
		);
	}
}

export default Item;