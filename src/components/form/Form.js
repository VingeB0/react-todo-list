import React, {Component} from 'react';
import './form.css';

class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: 'write what to do'
		};
	}

	updateInputValue(evt) {
		this.setState({
			inputValue: evt.target.value
		});
	}

	render() {
		return (
			<div className="todoForm">
				<input className="todoForm__input" type="text" name="valueItem" placeholder="write todo item"
					   value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
				<button className="todoForm__btn" onClick={() => this.props.foo(this.state.inputValue)}>Add</button>
			</div>
		);
	}
}

export default Form;