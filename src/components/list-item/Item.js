import React, {Component} from 'react';
import './list-item.css';

class Item extends React.Component {

	render() {
		return (
			<li className={this.props.text.done === true ? "list__item list__item--active" : "list__item"}>
				<input  className="list__input" id={"list__input-" + this.props.text.id} type="checkbox" onClick={() => this.props.toggleDoneStatus(this.props.index)}/>
				<label htmlFor={"list__input-" + this.props.text.id} className="list__label"></label>
				<span>{this.props.text.text}</span>
				<button className="list__btn" onClick={() => this.props.removeItemList(this.props.index)}>&#10799;</button>
			</li>
		);
	}
}

export default Item;