import React, { Component } from 'react';
import './todoWrap.css';
import TodoListItem from './todoListItem.js';
import TodoFormInput from './todoFormInput.js';

let list = [
	'string',
	'string2',
	'string3'
];

const listItems = list.map((item) =>
	<TodoListItem text={item}/>
);

class TodoWrap extends React.Component {
	render() {
		return (
			<div>
				<ul>
					{listItems}
				</ul>
				<TodoFormInput/>
			</div>
		);
	}
}

export default TodoWrap;