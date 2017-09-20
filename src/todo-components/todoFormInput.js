import React, { Component } from 'react';
import './todoFormInput.css';

class TodoFormInput extends React.Component {
	render() {
		return (
			<div class="todoForm">
				<input className="todoForm__input" type="text" placeholder="write todo item"/>
				<button className="todoForm__btn" >Add</button>
			</div>
		);
	}
}

export default TodoFormInput;