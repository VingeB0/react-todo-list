import React, { Component } from 'react';
import './todoListItem.css';

class TodoListItem extends React.Component {
	render() {
		return (
			<li>{this.props.text}</li>
		);
	}
}

export default TodoListItem;